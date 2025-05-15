import { LitElement, html, css } from "lit";
import { property } from "lit/decorators.js";
import { sendQuery, type QueryPayload } from "../api";

export class ChatWindow extends LitElement {
  static styles = css`
    .chat-container {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .messages {
      flex: 1;
      overflow-y: auto;
      padding: 16px 0;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .message {
      max-width: 85%;
      padding: 12px 16px;
      border-radius: 18px;
      font-size: 14px;
      line-height: 1.4;
      position: relative;
      animation: fadeIn 0.3s ease;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .user {
      align-self: flex-end;
      background-color: var(--primary-color);
      color: white;
      border-bottom-right-radius: 4px;
    }

    .bot {
      align-self: flex-start;
      background-color: white;
      color: var(--text-color);
      border-bottom-left-radius: 4px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    }

    .input-container {
      margin-top: 10px;
      position: relative;
      background-color: white;
      border-radius: 24px;
      padding: 4px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
    }

    input {
      flex: 1;
      padding: 12px 16px;
      border: none;
      border-radius: 24px;
      font-size: 14px;
      outline: none;
      color: var(--text-color);
    }

    .send-button {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-color: var(--primary-color);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin-right: 4px;
      transition: all 0.2s ease;
    }

    .send-button:hover {
      transform: scale(1.05);
    }

    .typing-indicator {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 8px 16px;
      background-color: white;
      border-radius: 18px;
      align-self: flex-start;
      margin-top: 8px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    }

    .typing-dot {
      width: 8px;
      height: 8px;
      background-color: var(--light-text);
      border-radius: 50%;
      animation: typingAnimation 1.4s infinite ease-in-out;
    }

    .typing-dot:nth-child(1) {
      animation-delay: 0s;
    }
    .typing-dot:nth-child(2) {
      animation-delay: 0.2s;
    }
    .typing-dot:nth-child(3) {
      animation-delay: 0.4s;
    }

    @keyframes typingAnimation {
      0%,
      60%,
      100% {
        transform: translateY(0);
      }
      30% {
        transform: translateY(-5px);
      }
    }

    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: var(--light-text);
      text-align: center;
      padding: 20px;
    }

    .empty-icon {
      font-size: 48px;
      margin-bottom: 16px;
      color: var(--primary-color);
      opacity: 0.7;
    }

    .empty-title {
      font-weight: 600;
      font-size: 16px;
      margin-bottom: 8px;
      color: var(--text-color);
    }

    .empty-desc {
      font-size: 14px;
      max-width: 240px;
      line-height: 1.4;
    }
  `;

  @property({ type: Array }) history: any[] = [];
  @property({ type: String }) apiKey = "";
  @property({ type: String })
  consultType: QueryPayload["type"] = "clinical";
  @property({ type: Boolean }) isTyping = false;

  firstUpdated() {
    // Mensaje de bienvenida
    setTimeout(() => {
      this.history = [
        {
          from: "bot",
          text: "Hola, soy Zentis, tu asistente médico. ¿En qué puedo ayudarte hoy?",
        },
      ];
    }, 500);
  }

  render() {
    return html`
      <div class="chat-container">
        ${this.history.length === 0
          ? html`
              <div class="empty-state">
                <div class="empty-icon">💬</div>
                <div class="empty-title">Inicia una consulta</div>
                <div class="empty-desc">
                  Escribe tu pregunta médica y te responderé al instante
                </div>
              </div>
            `
          : html`
              <div class="messages">
                ${this.history.map(
                  (m) => html` <div class="message ${m.from}">${m.text}</div> `
                )}
                ${this.isTyping
                  ? html`
                      <div class="typing-indicator">
                        <div class="typing-dot"></div>
                        <div class="typing-dot"></div>
                        <div class="typing-dot"></div>
                      </div>
                    `
                  : ""}
              </div>
            `}

        <div class="input-container">
          <input
            type="text"
            @keydown=${this._onKey}
            placeholder="Escribe tu consulta médica..."
          />
          <div class="send-button" @click=${this._send}>➤</div>
        </div>
      </div>
    `;
  }

  setConsultType(type: string) {
    let message = "";
    switch (type) {
      case "interaccion":
        message = "Quiero consultar sobre interacciones farmacológicas";
        break;
      case "adversos":
        message = "Necesito información sobre efectos adversos de medicamentos";
        break;
      case "patologia":
        message = "Busco medicamentos recomendados para una patología";
        break;
      default:
        return;
    }

    this._sendMessageText(message);
  }

  private _onKey(e: KeyboardEvent) {
    if (e.key === "Enter") {
      this._send();
    }
  }

  private _scrollToBottom() {
    // Pequeño delay para que exista el contenedor en DOM
    setTimeout(() => {
      const msgs = this.shadowRoot!.querySelector(".messages");
      if (msgs) msgs.scrollTop = msgs.scrollHeight;
    }, 50);
  }

  private async _send() {
    const input = this.shadowRoot!.querySelector("input") as HTMLInputElement;
    const text = input.value.trim();
    if (!text) return;

    // 1) Añadimos tu mensaje
    this.history = [...this.history, { from: "user", text }];
    input.value = "";
    this.requestUpdate();
    this._scrollToBottom();

    // 2) Mostramos “typing”
    this.isTyping = true;
    this.requestUpdate();

    // 3) Llamamos al backend
    let botText: string;
    try {
      const payload: QueryPayload = {
        type: this.consultType,
        message: text,
      };
      const response = await sendQuery(payload, this.apiKey);
      // Extraemos directamente response.output
      botText = response.output ?? "Lo siento, no hubo respuesta.";
    } catch {
      botText = "Lo siento, ocurrió un error al procesar tu consulta.";
    }

    // 4) Ocultamos “typing” y mostramos la respuesta
    this.isTyping = false;
    this.history = [...this.history, { from: "bot", text: botText }];
    this.requestUpdate();
    this._scrollToBottom();
  }

  // Dentro de tu ChatWindow, reemplaza completamente el método _sendMessageText por esto:

  private async _sendMessageText(text: string) {
    this.history = [...this.history, { from: "user", text }];
    this.isTyping = true;
    this.requestUpdate();

    // Scroll down
    setTimeout(() => {
      const msgs = this.shadowRoot!.querySelector(".messages");
      if (msgs) msgs.scrollTop = msgs.scrollHeight;
    }, 100);

    try {
      const payload: QueryPayload = {
        type: this.consultType,
        message: text,
      };

      // Simula typing…
      setTimeout(async () => {
        let response: { output?: string };
        try {
          response = await sendQuery(payload, this.apiKey);
        } catch {
          response = {
            output: "Lo siento, ha ocurrido un error. Intenta de nuevo.",
          };
        }

        const botText = response.output ?? "Lo siento, no hubo respuesta.";
        this.isTyping = false;
        this.history = [...this.history, { from: "bot", text: botText }];

        // Scroll again
        setTimeout(() => {
          const msgs = this.shadowRoot!.querySelector(".messages");
          if (msgs) msgs.scrollTop = msgs.scrollHeight;
        }, 100);
      }, 1500);
    } catch {
      this.isTyping = false;
      this.history = [
        ...this.history,
        {
          from: "bot",
          text: "Lo siento, ha ocurrido un error procesando tu consulta.",
        },
      ];
    }
  }
}

customElements.define("chat-window", ChatWindow);

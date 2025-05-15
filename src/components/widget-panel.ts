import { LitElement, html, css } from "lit";
import { property } from "lit/decorators.js";
import "./tab-menu";
import "./cards-grid";
import "./chat-window";
import { QueryPayload } from "../api";

export class WidgetPanel extends LitElement {
  static styles = css`
    :host {
      position: fixed;
      bottom: 90px;
      right: 20px;
      width: var(--panel-width);
      height: var(--panel-height);
      background: white;
      border-radius: var(--border-radius);
      box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
      display: none;
      flex-direction: column;
      overflow: hidden;
      font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, sans-serif;
      border: 1px solid #eaeaea;
      z-index: 9998;
      transition: all 0.3s ease;
    }

    :host([open]) {
      display: flex;
      animation: slideIn 0.3s forwards;
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    header {
      padding: 16px 20px;
      background-color: white;
      border-bottom: 1px solid #eaeaea;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo-container {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .logo {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background-color: var(--primary-color);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
    }

    .title {
      font-weight: 600;
      font-size: 18px;
      color: var(--text-color);
    }

    main {
      flex: 1;
      display: flex;
      flex-direction: column;
      background-color: var(--secondary-color);
      overflow: hidden;
    }

    .greeting {
      padding: 20px;
      text-align: center;
    }

    .greeting h2 {
      margin: 0;
      color: var(--primary-color);
      font-size: 20px;
      font-weight: 600;
    }

    .greeting p {
      margin: 8px 0 0;
      color: var(--light-text);
      font-size: 16px;
    }

    .content {
      flex: 1;
      padding: 0 20px 20px;
      overflow-y: auto;
    }

    .new-tag {
      background-color: #ffc107;
      color: #333;
      font-size: 10px;
      padding: 2px 6px;
      border-radius: 10px;
      margin-left: 5px;
      font-weight: bold;
      text-transform: uppercase;
    }
  `;

  @property({ type: Boolean, reflect: true })
  open = false;

  @property({ type: String })
  apiKey = "";

  @property({ type: Object })
  doctorData: any = null;

  @property({ type: String })
  consultType: QueryPayload["type"] = "clinical";

  @property({ type: String })
  currentTab = "Consulta clínica";

  render() {
    return html`
      <header>
        <div class="logo-container">
          <div class="logo">Z</div>
          <span class="title">Zentis</span>
        </div>
      </header>

      <main>
        <div class="greeting">
          <h2>Hola ${this.doctorData?.name || "Doctor"}</h2>
          <p>¿En qué puedo asistirte hoy?</p>
        </div>

        <tab-menu
          .tabs=${[
            "Consulta clínica",
            "Diagnóstico diferencial",
            "Medicamentos",
          ]}
          .active=${this.currentTab}
          @change=${this._onTab}
        ></tab-menu>

        <div class="content">
          ${this.currentTab === "Medicamentos"
            ? html`<cards-grid @select=${this._onSelect}></cards-grid>`
            : html`<chat-window
                .apiKey=${this.apiKey}
                .consultType=${this.currentTab}
              ></chat-window>`}
        </div>
      </main>
    `;
  }

  private _onTab(
    e: CustomEvent<
      "Consulta clínica" | "Diagnóstico diferencial" | "Medicamentos"
    >
  ) {
    this.currentTab = e.detail;

    // Mapeo directo al endpoint:
    if (this.currentTab === "Consulta clínica") {
      this.consultType = "clinical";
    } else if (this.currentTab === "Diagnóstico diferencial") {
      this.consultType = "differential";
    }
    // Para “Medicamentos” esperaremos a que el usuario elija un card
  }

  private _onSelect(e: CustomEvent<"interaccion" | "adversos" | "patologia">) {
    // Mapea la key del card al tipo de endpoint
    switch (e.detail) {
      case "interaccion":
        this.consultType = "drugs-interaction";
        break;
      case "adversos":
        this.consultType = "drugs-side-effects";
        break;
      case "patologia":
        this.consultType = "drugs-by-condition";
        break;
    }
    // Al seleccionar un card, pasa al chat
    this.currentTab = "Consulta clínica"; // o mantén “Medicamentos” si prefieres
  }
}

customElements.define("widget-panel", WidgetPanel);

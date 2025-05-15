import { LitElement, html, css } from "lit";

const options = [
  {
    key: "interaccion",
    title: "Interacción farmacológica",
    desc: "Consulta interacciones entre medicamentos y posibles contraindicaciones",
    icon: "🔄",
  },
  {
    key: "adversos",
    title: "Efectos adversos",
    desc: "Consulta efectos secundarios y reacciones adversas de medicamentos",
    icon: "⚠️",
  },
  {
    key: "patologia",
    title: "Buscar por patología",
    desc: "Consulta medicamentos recomendados para una patología específica",
    icon: "🔍",
  },
];

export class CardsGrid extends LitElement {
  static styles = css`
    .grid {
      display: grid;
      gap: 16px;
      margin-top: 16px;
    }

    .card {
      background-color: white;
      border-radius: 12px;
      padding: 16px;
      cursor: pointer;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      transition: all 0.2s ease;
      display: flex;
      align-items: flex-start;
      border: 1px solid #eaeaea;
    }

    .card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      border-color: var(--primary-color);
    }

    .icon-container {
      width: 40px;
      height: 40px;
      border-radius: 8px;
      background-color: var(--secondary-color);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 12px;
      font-size: 20px;
    }

    .content {
      flex: 1;
    }

    h4 {
      margin: 0 0 6px;
      color: var(--text-color);
      font-size: 16px;
      font-weight: 600;
    }

    p {
      margin: 0;
      font-size: 13px;
      color: var(--light-text);
      line-height: 1.4;
    }
  `;

  render() {
    return html`
      <div class="grid">
        ${options.map(
          (o) => html`
            <div class="card" @click=${() => this._select(o.key)}>
              <div class="icon-container">${o.icon}</div>
              <div class="content">
                <h4>${o.title}</h4>
                <p>${o.desc}</p>
              </div>
            </div>
          `
        )}
      </div>
    `;
  }

  private _select(key: string) {
    this.dispatchEvent(new CustomEvent("select", { detail: key }));
  }
}

customElements.define("cards-grid", CardsGrid);

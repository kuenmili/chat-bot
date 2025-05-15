import { LitElement, html, css } from "lit";
import { property } from "lit/decorators.js";

interface Tab {
  id: string;
  label: string;
  isNew?: boolean;
}

export class TabMenu extends LitElement {
  static styles = css`
    .tabs {
      display: flex;
      background-color: white;
      padding: 0 20px;
      border-bottom: 1px solid #eaeaea;
    }

    .tab {
      flex: 1;
      text-align: center;
      padding: 12px 8px;
      cursor: pointer;
      color: var(--light-text);
      font-size: 14px;
      font-weight: 500;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }

    .tab:hover {
      color: var(--primary-color);
    }

    .active {
      color: var(--primary-color);
    }

    .active::after {
      content: "";
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: var(--primary-color);
      border-radius: 3px 3px 0 0;
    }

    .icon {
      margin-right: 6px;
      font-size: 16px;
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

  @property({ type: Array })
  tabs: Tab[] = [];

  @property({ type: String })
  active = "";

  render() {
    return html`
      <div class="tabs">
        ${this.tabs.map(
          (tab) => html`
            <div
              class="tab ${tab.id === this.active ? "active" : ""}"
              @click=${() => this._select(tab.id)}
            >
              <span class="icon"> ${this._getIcon(tab.id)} </span>
              ${tab.label}
              ${tab.isNew ? html`<span class="new-tag">Nuevo</span>` : ""}
            </div>
          `
        )}
      </div>
    `;
  }

  private _getIcon(tabId: string): string {
    switch (tabId) {
      case "Consulta clínica":
        return "👨‍⚕️";
      case "Diagnóstico diferencial":
        return "🔍";
      case "Medicamentos":
        return "💊";
      default:
        return "";
    }
  }

  private _select(tabId: string) {
    this.dispatchEvent(new CustomEvent("change", { detail: tabId }));
  }
}

customElements.define("tab-menu", TabMenu);

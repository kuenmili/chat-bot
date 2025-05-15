import { LitElement, html, css } from "lit";

export class WidgetToggle extends LitElement {
  static styles = css`
    button {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 60px;
      height: 60px;
      border: none;
      border-radius: 50%;
      background-color: var(--primary-color);
      color: white;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
    }
    button:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
    }

    /* Cuando esté mostrando el logo, usamos fondo transparente */
    button.logo {
      background-color: transparent;
      box-shadow: none; /* opcional: quita sombra si quieres */
    }

    .icon {
      width: 60px;
      height: 60px;
    }
    .close-icon {
      font-size: 28px;
      line-height: 1;
    }
  `;

  private open = false;

  render() {
    // si open===false, agregamos la clase "logo" al botón
    const btnClass = this.open ? "" : "logo";

    return html`
      <button class=${btnClass} @click=${this._toggle}>
        ${this.open
          ? html`<span class="close-icon">✕</span>`
          : html`<img
              class="icon"
              src="/public/assets/logo_window.png"
              alt="Logo"
            />`}
      </button>
    `;
  }

  private _toggle() {
    this.open = !this.open;
    this.dispatchEvent(
      new CustomEvent("toggle", {
        detail: { open: this.open },
      })
    );
    this.requestUpdate();
  }
}

customElements.define("widget-toggle", WidgetToggle);

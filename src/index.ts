import { LitElement, html, css } from 'lit';
import './components/widget-toggle';
import './components/widget-panel';

export class MedicalChatWidget extends LitElement {
  static styles = css`
    :host { all: initial; }
  `;

  apiKey = '';
  doctorData: Record<string, any> | null = null;

  connectedCallback() {
    super.connectedCallback();
    if (this.hasAttribute('api-key')) {
      this.apiKey = this.getAttribute('api-key')!;
    }
    if (this.hasAttribute('doctor-data')) {
      this.doctorData = JSON.parse(this.getAttribute('doctor-data')!);
    }
  }

  render() {
    return html`
      <widget-toggle @toggle=${this._onToggle}></widget-toggle>
      <widget-panel
        .apiKey=${this.apiKey}
        .doctorData=${this.doctorData}
      ></widget-panel>
    `;
  }

  private _onToggle(e: CustomEvent) {
    const panel = this.shadowRoot!.querySelector('widget-panel') as any;
    panel.open = e.detail.open;
  }
}

customElements.define('medical-chat', MedicalChatWidget);

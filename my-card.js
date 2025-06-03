class MyCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        .card {
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 1rem;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          background: #fff;
        }
        .header {
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
      </style>
      <div class="card">
        <div class="header"><slot name="header"></slot></div>
        <div class="content"><slot name="content"></slot></div>
      </div>
    `;
  }
}

customElements.define('my-card', MyCard);

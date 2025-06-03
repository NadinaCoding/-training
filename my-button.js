//Creating a new kind of HTML element that behaves like a regular one but with my own custom logic.
class MyButton extends HTMLElement {
  static get observedAttributes() {
    return ['label', 'variant'];
  }

  constructor() { // constructor runs when the element is created.
    //super() call runs the constructor of the parent class (HTMLElement in this case).
    super();
    //Create a private area (called the Shadow DOM) where I can put my own HTML and styles, so they don’t get mixed up with the rest of the page.
    this.attachShadow({ mode: 'open' });
  }
//It’s like a “setup” or “start” function for your component.
  attributeChangedCallback() { //When element is added to the DOM - Renders initial content
    this.render();
  }
//When an observed attribute changes- this function runs to update the content.
  connectedCallback() {
    this.render();
  }

  render() {
    const label = this.getAttribute('label') || 'Click Me';
    const variant = this.getAttribute('variant') || 'primary';

    this.shadowRoot.innerHTML = `
      <style>
        button {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s;
        }
        button.primary {
          background-color: #007acc;
          color: white;
        }
        button.secondary {
          background-color: #f0f0f0;
          color: #333;
        }
      </style>
      <button class="${variant}">${label}</button>
    `;

    this.shadowRoot.querySelector('button')?.addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('onClick', { bubbles: true, composed: true }));
    });
  }
}

customElements.define('my-button', MyButton);

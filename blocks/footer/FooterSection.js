import { observeMainIntersection } from "./IntersectionObserverFooter.js";

class FooterSection extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: "open" });
        this._loaded = false;
        this._styles = document.createElement("style");
        this.root.appendChild(this._styles);

        async function loadCSS() {
            const request = await fetch("/blocks/footer/footer.css");
            const css = await request.text();
            this._styles.textContent = css;
        }
        this._loadCSS = loadCSS.bind(this);
    }
    async loadHTML() {
        const request = await fetch("/blocks/footer/footer.html");
        const html = await request.text();
        const template = document.createElement("template");
        template.innerHTML = html;
        const content = template.content.cloneNode(true);
        this.root.appendChild(content);
    }
    connectedCallback() {
        this._intersectionObserver = observeMainIntersection({
            threshold: 0.9,
            onIntersect: () => this._load(),
        });

        if (!this._intersectionObserver) {
            this._load();
        }
    }

    disconnectedCallback() {
        this._intersectionObserver?.disconnect();
    }

    async _load() {
        if (this._loaded) return;
        this._loaded = true;

        await this._loadCSS();
        await this.loadHTML();
    }
}

customElements.define("footer-section", FooterSection);
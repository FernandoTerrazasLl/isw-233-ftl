import { observeMainIntersection } from "./IntersectionObserverFooter.js";
import Handlebars from "handlebars";

class FooterSection extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: "open" });
        this._loaded = false;
        this._styles = document.createElement("style");
        this.root.appendChild(this._styles);

        async function loadCSS() {
            const request = await fetch("/blocks/footer/footer.css", {
                headers: { Accept: "text/css" },
            });
            const css = await request.text();
            this._styles.textContent = css;
        }
        this._loadCSS = loadCSS.bind(this);
    }
    async loadHTML() {
        const request = await fetch("/blocks/footer/footer.html");
        const templateSource = await request.text();

        const footerData = {
            name: "Fernando Terrazas Llanos",
            role: "Aspiring Backend Engineer",
            socialLinks: [
                {
                    href: "https://github.com/FernandoTerrazasLl",
                    icon: "/img/iconoGithubMin.png",
                    alt: "GitHub icon",
                },
                {
                    href: "https://www.linkedin.com/in/fernando-terrazas-llanos-960560267/",
                    icon: "/img/iconoLinkedinMin.png",
                    alt: "LinkedIn icon",
                },
                {
                    href: "mailto:terrazasllanosfernando@gmail.com",
                    icon: "/img/iconoMailMin.png",
                    alt: "Email icon",
                },
            ],
            copyright: "© 2026 All rights reserved",
        };

        const compiledTemplate = Handlebars.compile(templateSource);
        const rendered = compiledTemplate(footerData);

        const template = document.createElement("template");
        template.innerHTML = rendered;
        const content = template.content.cloneNode(true);
        this.root.appendChild(content);
    }
    connectedCallback() {
        this._intersectionObserver = observeMainIntersection({
            threshold: 0.1,
            rootMargin: "0px 0px 200px 0px",
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
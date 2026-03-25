import { observeMainIntersection } from "./IntersectionObserverFooter";
import Handlebars from "handlebars";

type FooterSocialLink = {
    href: string;
    icon: string;
    alt: string;
};

type FooterTemplateData = {
    name: string;
    role: string;
    socialLinks: FooterSocialLink[];
    copyright: string;
};

class FooterSection extends HTMLElement {
    private readonly root: ShadowRoot;
    private loaded: boolean;
    private readonly stylesNode: HTMLStyleElement;
    private readonly loadCSSFn: () => Promise<void>;
    private intersectionObserver: IntersectionObserver | null;

    constructor() {
        super();
        this.root = this.attachShadow({ mode: "open" });
        this.loaded = false;
        this.stylesNode = document.createElement("style");
        this.root.appendChild(this.stylesNode);
        this.intersectionObserver = null;

        const loadCSS = async () => {
            const request = await fetch("/components/footer/footer.css", {
                headers: { Accept: "text/css" },
            });
            const css = await request.text();
            this.stylesNode.textContent = css;
        };

        this.loadCSSFn = loadCSS;
    }

    async loadHTML(): Promise<void> {
        const request = await fetch("/components/footer/footer.html");
        const templateSource = await request.text();

        const footerData: FooterTemplateData = {
            name: "Fernando Terrazas Llanos",
            role: "Aspiring Backend Engineer",
            socialLinks: [
                {
                    href: "https://github.com/FernandoTerrazasLl",
                    icon: "/components/footer/__image/iconoGithubMin.png",
                    alt: "GitHub icon",
                },
                {
                    href: "https://www.linkedin.com/in/fernando-terrazas-llanos-960560267/",
                    icon: "/components/footer/__image/iconoLinkedinMin.png",
                    alt: "LinkedIn icon",
                },
                {
                    href: "mailto:terrazasllanosfernando@gmail.com",
                    icon: "/components/footer/__image/iconoMailMin.png",
                    alt: "Email icon",
                },
            ],
            copyright: "© 2026 All rights reserved",
        };

        const compiledTemplate = Handlebars.compile(templateSource);
        const rendered = compiledTemplate(footerData);

        const template = document.createElement("template");
        template.innerHTML = rendered;
        this.root.appendChild(template.content.cloneNode(true));
    }

    connectedCallback(): void {
        this.intersectionObserver = observeMainIntersection({
            threshold: 0.1,
            rootMargin: "0px 0px 200px 0px",
            onIntersect: () => this._load(),
        });

        if (!this.intersectionObserver) {
            void this._load();
        }
    }

    disconnectedCallback(): void {
        this.intersectionObserver?.disconnect();
        this.intersectionObserver = null;
    }

    private async _load(): Promise<void> {
        if (this.loaded) return;
        this.loaded = true;

        await this.loadCSSFn();
        await this.loadHTML();
    }
}

customElements.define("footer-section", FooterSection);
import Handlebars from "handlebars";

type NavbarLink = {
    href: string;
    label: string;
};

type NavbarTemplateData = {
    links: NavbarLink[];
};

class NavbarSection extends HTMLElement {
    private readonly root: ShadowRoot;
    private readonly stylesNode: HTMLStyleElement;
    private observer: MutationObserver | null;

    constructor() {
        super();
        this.root = this.attachShadow({ mode: "open" });
        this.stylesNode = document.createElement("style");
        this.root.appendChild(this.stylesNode);
        this.observer = null;

        const loadCSS = async () => {
            const request = await fetch("/components/navbar/navbar.css", {
                headers: { Accept: "text/css" },
            });
            const css = await request.text();
            this.stylesNode.textContent = css;
        };

        void loadCSS();
    }

    async loadHTML(): Promise<void> {
        const request = await fetch("/components/navbar/navbar.html");
        const templateSource = await request.text();

        const navbarData: NavbarTemplateData = {
            links: [
                { href: "/", label: "Home" },
                { href: "/about", label: "About me" },
                { href: "/projects", label: "Projects" },
                { href: "/abilities", label: "Abilities" },
                { href: "/education", label: "Education" },
                { href: "/contact", label: "Contact" },
                { href: "/blog", label: "Blog" },
            ],
        };

        const compiledTemplate = Handlebars.compile(templateSource);
        const rendered = compiledTemplate(navbarData);

        const template = document.createElement("template");
        template.innerHTML = rendered;
        this.root.appendChild(template.content.cloneNode(true));
    }

    connectedCallback(): void {
        void this.loadHTML().then(() => {
            this._updateLinkColors(document.body.dataset.route || "/");
        });

        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (mutation.type === "attributes" && mutation.attributeName === "data-route") {
                    this._updateLinkColors(document.body.dataset.route || "/");
                }
            }
        });

        observer.observe(document.body, { attributes: true });
        this.observer = observer;
    }

    disconnectedCallback(): void {
        this.observer?.disconnect();
        this.observer = null;
    }

    private _updateLinkColors(route: string): void {
        const links = this.root.querySelectorAll<HTMLElement>(".home__nav-link");
        const color = route === "/" ? "#fff" : "rgb(73, 131, 240)";

        links.forEach((link) => {
            link.style.color = color;
        });
    }
}

customElements.define("navbar-section", NavbarSection);

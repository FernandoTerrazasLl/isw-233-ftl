class NavbarSection extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: "open" });
        const styles = document.createElement("style");
        this.root.appendChild(styles);

        async function loadCSS() {
            const request = await fetch("/blocks/navbar/navbar.css");
            const css = await request.text();
            styles.textContent = css;
        }
        loadCSS();
    }

    async loadHTML() {
        const request = await fetch("/blocks/navbar/navbar.html");
        const html = await request.text();
        const template = document.createElement("template");
        template.innerHTML = html;
        const content = template.content.cloneNode(true);
        this.root.appendChild(content);
    }

    connectedCallback() {
        this.loadHTML().then(() => {
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
        this._observer = observer;
    }

    disconnectedCallback() {
        this._observer?.disconnect();
    }

    _updateLinkColors(route) {
        const links = this.root.querySelectorAll(".home__nav-link");
        const color = route === "/" ? "#fff" : "rgb(73, 131, 240)";
        links.forEach((link) => {
            link.style.color = color;
        });
    }
}

customElements.define("navbar-section", NavbarSection);

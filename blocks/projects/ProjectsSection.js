class ProjectsSection extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: "open" });
        const styles = document.createElement("style");
        this.root.appendChild(styles);
        async function loadCSS() {
            const request = await fetch("/blocks/projects/projects.css");
            const css = await request.text();
            styles.textContent = css;
        }
        loadCSS();
    }
    async loadHTML() {
        const request = await fetch("/blocks/projects/projects.html");
        const html = await request.text();
        const template = document.createElement("template");
        template.innerHTML = html;
        const content = template.content.cloneNode(true);
        this.root.appendChild(content);
    }
    connectedCallback() {
        this.loadHTML();
    }
}

customElements.define("projects-section", ProjectsSection);
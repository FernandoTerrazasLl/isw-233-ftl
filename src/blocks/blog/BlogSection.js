import { initCategories } from "./blog-btn-categories.js";
import { init_blogs } from "./blog-show-blogs.js";

class BlogSection extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: "open" });
        const styles = document.createElement("style");
        this.root.appendChild(styles);

        async function loadCSS() {
            const request = await fetch("/blocks/blog/blog.css");
            const css = await request.text();
            styles.textContent = css;
        }
        loadCSS();
    }
    async loadHTML() {
        const request = await fetch("/blocks/blog/blog.html");
        const html = await request.text();
        const template = document.createElement("template");
        template.innerHTML = html;
        const content = template.content.cloneNode(true);
        this.root.appendChild(content);
    }

    async connectedCallback() {
        if (this._initialized) return;
        this._initialized = true;

        await this.loadHTML();
        await init_blogs(this.root);
        await initCategories(this.root);
    }
}

customElements.define("blog-section", BlogSection);
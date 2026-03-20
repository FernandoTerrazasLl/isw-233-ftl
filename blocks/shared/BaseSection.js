import Handlebars from "handlebars";

class BaseSection extends HTMLElement {
    constructor({ shadowMode = "open" } = {}) {
        super();
        this.root = this.attachShadow({ mode: shadowMode });
        this._initialized = false;
        this._styles = document.createElement("style");
        this.root.appendChild(this._styles);
    }

    connectedCallback() {
        if (this._initialized) return;
        this._initialized = true;

        this.process();
    }

    async process() {
        await this.loadCSS();
        const templateSource = await this.loadHTML();
        const templateData = await this.getTemplateData();
        const renderedHTML = this.processData(templateSource, templateData);
        this.saveData(renderedHTML);
        await this.afterProcess();
    }

    async loadCSS() {
        const cssPath = this.getCSSPath();
        if (!cssPath) return;

        const request = await fetch(cssPath, {
            headers: { Accept: "text/css" },
        });
        const css = await request.text();
        this._styles.textContent = css;
    }

    async loadHTML() {
        const htmlPath = this.getHTMLPath();
        if (!htmlPath) return "";

        const request = await fetch(htmlPath);
        return request.text();
    }

    processData(templateSource, templateData) {
        const compiledTemplate = Handlebars.compile(templateSource);
        return compiledTemplate(templateData);
    }

    saveData(renderedHTML) {
        const template = document.createElement("template");
        template.innerHTML = renderedHTML;
        this.root.appendChild(template.content.cloneNode(true));
    }

    async getTemplateData() {
        return {};
    }

    async afterProcess() {
    }

    getCSSPath() {
        throw new Error("getCSSPath() must be implemented by the section class");
    }

    getHTMLPath() {
        throw new Error("getHTMLPath() must be implemented by the section class");
    }

    disconnectedCallback(){
        
    }
}

export default BaseSection;

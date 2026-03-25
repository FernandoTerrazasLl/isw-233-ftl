import Handlebars from "handlebars";

abstract class BaseSection<TData extends Record<string, unknown> = Record<string, unknown>> extends HTMLElement {
    protected readonly root: ShadowRoot;
    private initialized: boolean;
    private readonly stylesNode: HTMLStyleElement;

    constructor() {
        super();
        const shadowMode: ShadowRootMode = "open";
        this.root = this.attachShadow({ mode: shadowMode });
        this.initialized = false;
        this.stylesNode = document.createElement("style");
        this.root.appendChild(this.stylesNode);
    }

    connectedCallback(): void {
        if (this.initialized) return;
        this.initialized = true;

        this.process();
    }

    private async process(): Promise<void> {
        await this.loadCSS();

        const templateSource = await this.loadHTML();
        const templateData = await this.getTemplateData();
        const renderedHtml = this.processData(templateSource, templateData);

        this.saveData(renderedHtml);
        await this.afterProcess();
    }

    private async loadCSS(): Promise<void> {
        const cssPath = this.getCSSPath();
        if (!cssPath) return;

        const response = await fetch(cssPath, {
            headers: { Accept: "text/css" },
        });

        const css = await response.text();
        this.stylesNode.textContent = css;
    }

    private async loadHTML(): Promise<string> {
        const htmlPath = this.getHTMLPath();
        if (!htmlPath) return "";

        const response = await fetch(htmlPath);
        return response.text();
    }

    private processData(templateSource: string, templateData: TData): string {
        const compiledTemplate = Handlebars.compile(templateSource);
        return compiledTemplate(templateData);
    }

    private saveData(renderedHtml: string): void {
        const template = document.createElement("template");
        template.innerHTML = renderedHtml;
        this.root.appendChild(template.content.cloneNode(true));
    }

    protected async getTemplateData(): Promise<TData> {
        return {} as TData;
    }

    protected async afterProcess(): Promise<void> {
    }

    protected abstract getCSSPath(): string;

    protected abstract getHTMLPath(): string;

    disconnectedCallback(): void {
    }
}

export default BaseSection;

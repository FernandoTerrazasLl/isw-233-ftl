import { initCategories } from "./blog-btn-categories";
import { init_blogs } from "./blog-show-blogs";
import BaseSection from "../shared/BaseSection";

type BlogTemplateData = {
    title: string;
    searchPlaceholder: string;
    searchLabel: string;
    categoriesLabel: string;
};

class BlogSection extends BaseSection<BlogTemplateData> {
    protected getCSSPath(): string {
        return "/components/blog/blog.css";
    }

    protected getHTMLPath(): string {
        return "/components/blog/blog.html";
    }

    protected async getTemplateData(): Promise<BlogTemplateData> {
        return {
            title: "Blog",
            searchPlaceholder: "Search...",
            searchLabel: "Search",
            categoriesLabel: "Categories",
        };
    }

    protected async afterProcess(): Promise<void> {
        await init_blogs(this.root);
        await initCategories(this.root);
    }
}

customElements.define("blog-section", BlogSection);
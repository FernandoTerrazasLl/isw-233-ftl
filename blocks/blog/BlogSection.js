import { initCategories } from "./blog-btn-categories.js";
import { init_blogs } from "./blog-show-blogs.js";
import BaseSection from "../shared/BaseSection.js";

class BlogSection extends BaseSection {
    getCSSPath() {
        return "/blocks/blog/blog.css";
    }

    getHTMLPath() {
        return "/blocks/blog/blog.html";
    }

    async getTemplateData() {
        return {
            title: "Blog",
            searchPlaceholder: "Search...",
            searchLabel: "Search",
            categoriesLabel: "Categories",
        };
    }

    async afterProcess() {
        await init_blogs(this.root);
        await initCategories(this.root);
    }
}

customElements.define("blog-section", BlogSection);
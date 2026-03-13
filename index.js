import Router from "./services/Router.js";
import { initCategories } from "./blocks/blog/blog-btn-categories.js";
import { init_blogs, filterBlogsByCategory } from "./blocks/blog/blog-show-blogs.js";

document.addEventListener("DOMContentLoaded", () => {
    Router.init();
    init_blogs();
    initCategories(filterBlogsByCategory);
});
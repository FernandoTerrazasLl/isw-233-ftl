import Router from "./services/Router.js";
import { initCategories } from "./blocks/blog/blog-btn-categories.js";
import { init_blogs } from "./blocks/blog/blog-show-blogs.js";

document.addEventListener("DOMContentLoaded", () => {
    Router.init();
    initCategories();
    init_blogs();
});
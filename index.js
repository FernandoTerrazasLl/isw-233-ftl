import Router from "./services/Router.js";
import "./blocks/home/HomeSection.js";
import "./blocks/about/AboutSection.js";
import "./blocks/projects/ProjectsSection.js";
import "./blocks/abilities/AbilitiesSection.js";
import "./blocks/education/EducationSection.js";
import "./blocks/blog/BlogSection.js";
import "./blocks/contact-me/ContactSection.js";
import "./blocks/footer/FooterSection.js";
import { initCategories } from "./blocks/blog/blog-btn-categories.js";
import { init_blogs } from "./blocks/blog/blog-show-blogs.js";

document.addEventListener("DOMContentLoaded", () => {
    Router.init();
    init_blogs();
    initCategories();
});
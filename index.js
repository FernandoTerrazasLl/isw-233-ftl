import Router from "./services/Router.js";
import "./blocks/home/HomeSection.js";
import "./blocks/about/AboutSection.js";
import "./blocks/projects/ProjectsSection.js";
import "./blocks/abilities/AbilitiesSection.js";
import "./blocks/education/EducationSection.js";
import "./blocks/blog/BlogSection.js";
import "./blocks/contact-me/ContactSection.js";
import "./blocks/footer/FooterSection.js";
import "./blocks/navbar/NavbarSection.js";

document.addEventListener("DOMContentLoaded", () => {
    Router.init();
});
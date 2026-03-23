import Handlebars from "handlebars";
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

async function registerPartials() {
    const partials = ["section-header", "project-card", "page-footer"];
    await Promise.all(
        partials.map(async (partial) => {
            const res = await fetch(`/partials/${partial}.hbs`);
            if (!res.ok) return;
            const template = await res.text();
            Handlebars.registerPartial(partial, template);
        })
    );
}

document.addEventListener("DOMContentLoaded", async () => {
    await registerPartials();
    Router.init();
});

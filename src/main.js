import Handlebars from "handlebars";
import Router from "./services/Router.js";
import "./components/home/HomeSection.js";
import "./components/about/AboutSection.js";
import "./components/projects/ProjectsSection.js";
import "./components/abilities/AbilitiesSection.js";
import "./components/education/EducationSection.js";
import "./components/blog/BlogSection.js";
import "./components/contact-me/ContactSection.js";
import "./components/footer/FooterSection.js";
import "./components/navbar/NavbarSection.js";

import "./styles.css";
import "./vendor/normalize.css";
import "./components/abilities/abilities.css";
import "./components/about/about.css";
import "./components/projects/projects.css";
import "./components/education/education.css";
import "./components/footer/footer.css";
import "./components/home/home.css";
import "./components/contact-me/contact-me.css";
import "./components/blog/blog.css";

async function registerPartials() {
    const partials = ["section-title", "social-link-item", "icon-text-link"];
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

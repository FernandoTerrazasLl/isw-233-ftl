import Handlebars from "handlebars";
import Router from "./services/Router";
import "./components/home/HomeSection";
import "./components/about/AboutSection";
import "./components/projects/ProjectsSection";
import "./components/abilities/AbilitiesSection";
import "./components/education/EducationSection";
import "./components/blog/BlogSection";
import "./components/contact-me/ContactSection";
import "./components/footer/FooterSection";
import "./components/navbar/NavbarSection";

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

const PARTIALS = ["section-title", "social-link-item", "icon-text-link"] as const;

async function registerPartials(): Promise<void> {
    await Promise.all(
        PARTIALS.map(async (partialName) => {
            const response = await fetch(`/partials/${partialName}.hbs`);
            if (!response.ok) return;

            const template = await response.text();
            Handlebars.registerPartial(partialName, template);
        })
    );
}

document.addEventListener("DOMContentLoaded", async () => {
    await registerPartials();
    Router.init();
});

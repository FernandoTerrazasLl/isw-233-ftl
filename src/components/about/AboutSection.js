import BaseSection from "../shared/BaseSection.js";

class AboutSection extends BaseSection {
    getCSSPath() {
        return "/components/about/about.css";
    }

    getHTMLPath() {
        return "/components/about/about.html";
    }

    async getTemplateData() {
        return {
            title: "About Me",
            profilePhoto: "/components/about/image/imagenFernando.png",
            backgroundImage: "/components/about/image/aboutMeFondoDePersona.png",
            profileName: "Fernando Terrazas Llanos",
            profileRole: "Aspiring Backend Developer Engineer",
            description:
                "A scholarship student at the Bolivian Catholic University, deeply passionate about technology and innovation. Certified with a B2 English TOEFL proficiency. I am committed to continuously acquiring new skills that enhance both my professional expertise and personal growth.",
        };
    }
}

customElements.define("about-section", AboutSection);
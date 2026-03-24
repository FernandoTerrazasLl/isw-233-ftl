import BaseSection from "../shared/BaseSection.js";

class HomeSection extends BaseSection {
    getCSSPath() {
        return "/components/home/home.css";
    }

    getHTMLPath() {
        return "/components/home/home.html";
    }

    async getTemplateData() {
        return {
            name: "Fernando Terrazas Llanos",
            profession: "Software Engineering Student",
            phrases: [
                "If you can imagine it, you can program it",
                "Transforming business ideas in digital systems",
            ],
            socialLinks: [
                {
                    href: "https://github.com/FernandoTerrazasLl",
                    iconSrc: "/components/home/__image/iconoGithubMin.png",
                    iconAlt: "GitHub icon",
                },
                {
                    href: "https://www.linkedin.com/in/fernando-terrazas-llanos-960560267/",
                    iconSrc: "/components/home/__image/iconoLinkedinMin.png",
                    iconAlt: "LinkedIn icon",
                },
                {
                    href: "mailto:terrazasllanosfernando@gmail.com",
                    iconSrc: "/components/home/__image/iconoMailMin.png",
                    iconAlt: "Email icon",
                },
            ],
        };
    }
}

customElements.define("home-section", HomeSection);

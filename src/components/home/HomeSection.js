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
        };
    }
}

customElements.define("home-section", HomeSection);

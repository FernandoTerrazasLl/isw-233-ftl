import BaseSection from "../shared/BaseSection.js";

class HomeSection extends BaseSection {
    getCSSPath() {
        return "/blocks/home/home.css";
    }

    getHTMLPath() {
        return "/blocks/home/home.html";
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

import BaseSection from "../shared/BaseSection.js";

class AbilitiesSection extends BaseSection {
    getCSSPath() {
        return "/blocks/abilities/abilities.css";
    }

    getHTMLPath() {
        return "/blocks/abilities/abilities.html";
    }

    async getTemplateData() {
        return {
            title: "Technical Abilities",
            columns: [
                {
                    title: "Web",
                    icons: [
                        { src: "/img/iconoHtml.png", alt: "HTML icon" },
                        { src: "/img/iconoCss.png", alt: "CSS icon" },
                        { src: "/img/iconoJs.png", alt: "JavaScript icon" },
                        { src: "/img/iconoTypescript.png", alt: "TypeScript icon" },
                        { src: "/img/iconoAngular.png", alt: "Angular icon" },
                        { src: "/img/iconoDotNet.png", alt: ".NET icon" },
                        { src: "/img/iconoSpringBoot.png", alt: "Spring Boot icon" },
                        { src: "/img/iconoCPlusPlus.png", alt: "C++ icon" },
                        { src: "/img/iconoSQLServer.png", alt: "SQL Server icon" },
                        { src: "/img/iconoPostgreSQL.png", alt: "PostgreSQL icon" },
                        { src: "/img/iconoTeachableMachine.png", alt: "Teachable Machine icon" },
                    ],
                },
                {
                    title: "Tools",
                    icons: [
                        { src: "/img/iconoFigma.png", alt: "Figma icon" },
                        { src: "/img/iconoGit.png", alt: "Git icon" },
                        { src: "/img/iconoGithub.png", alt: "GitHub icon" },
                        { src: "/img/iconoVsCode.png", alt: "VS Code icon" },
                        { src: "/img/iconoIntelliJ.png", alt: "IntelliJ icon" },
                        { src: "/img/iconoPostman.png", alt: "Postman icon" },
                        { src: "/img/iconoDocker.png", alt: "Docker icon" },
                        { src: "/img/iconoAzureDevOps.png", alt: "Azure DevOps icon" },
                        { src: "/img/iconoNotion.png", alt: "Notion icon" },
                    ],
                },
            ],
        };
    }
}

customElements.define("abilities-section", AbilitiesSection);
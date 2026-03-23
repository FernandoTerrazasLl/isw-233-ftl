import BaseSection from "../shared/BaseSection.js";

class AbilitiesSection extends BaseSection {
    getCSSPath() {
        return "/components/abilities/abilities.css";
    }

    getHTMLPath() {
        return "/components/abilities/abilities.html";
    }

    async getTemplateData() {
        return {
            title: "Technical Abilities",
            columns: [
                {
                    title: "Web",
                    icons: [
                        { src: "/components/abilities/image/iconoHtml.png", alt: "HTML icon" },
                        { src: "/components/abilities/image/iconoCss.png", alt: "CSS icon" },
                        { src: "/components/abilities/image/iconoJs.png", alt: "JavaScript icon" },
                        { src: "/components/abilities/image/iconoTypescript.png", alt: "TypeScript icon" },
                        { src: "/components/abilities/image/iconoAngular.png", alt: "Angular icon" },
                        { src: "/components/abilities/image/iconoDotNet.png", alt: ".NET icon" },
                        { src: "/components/abilities/image/iconoSpringBoot.png", alt: "Spring Boot icon" },
                        { src: "/components/abilities/image/iconoCPlusPlus.png", alt: "C++ icon" },
                        { src: "/components/abilities/image/iconoSQLServer.png", alt: "SQL Server icon" },
                        { src: "/components/abilities/image/iconoPostgreSQL.png", alt: "PostgreSQL icon" },
                        { src: "/components/abilities/image/iconoTeachableMachine.png", alt: "Teachable Machine icon" },
                    ],
                },
                {
                    title: "Tools",
                    icons: [
                        { src: "/components/abilities/image/iconoFigma.png", alt: "Figma icon" },
                        { src: "/components/abilities/image/iconoGit.png", alt: "Git icon" },
                        { src: "/components/abilities/image/iconoGithub.png", alt: "GitHub icon" },
                        { src: "/components/abilities/image/iconoVsCode.png", alt: "VS Code icon" },
                        { src: "/components/abilities/image/iconoIntelliJ.png", alt: "IntelliJ icon" },
                        { src: "/components/abilities/image/iconoPostman.png", alt: "Postman icon" },
                        { src: "/components/abilities/image/iconoDocker.png", alt: "Docker icon" },
                        { src: "/components/abilities/image/iconoAzureDevOps.png", alt: "Azure DevOps icon" },
                        { src: "/components/abilities/image/iconoNotion.png", alt: "Notion icon" },
                    ],
                },
            ],
        };
    }
}

customElements.define("abilities-section", AbilitiesSection);
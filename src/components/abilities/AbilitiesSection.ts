import BaseSection from "../shared/BaseSection";

type AbilityIcon = {
    src: string;
    alt: string;
};

type AbilityColumn = {
    title: string;
    icons: AbilityIcon[];
};

type AbilitiesTemplateData = {
    title: string;
    columns: AbilityColumn[];
};

class AbilitiesSection extends BaseSection<AbilitiesTemplateData> {
    protected getCSSPath(): string {
        return "/components/abilities/abilities.css";
    }

    protected getHTMLPath(): string {
        return "/components/abilities/abilities.html";
    }

    protected async getTemplateData(): Promise<AbilitiesTemplateData> {
        return {
            title: "Technical Abilities",
            columns: [
                {
                    title: "Web",
                    icons: [
                        { src: "/components/abilities/__image/iconoHtml.png", alt: "HTML icon" },
                        { src: "/components/abilities/__image/iconoCss.png", alt: "CSS icon" },
                        { src: "/components/abilities/__image/iconoJs.png", alt: "JavaScript icon" },
                        { src: "/components/abilities/__image/iconoTypescript.png", alt: "TypeScript icon" },
                        { src: "/components/abilities/__image/iconoAngular.png", alt: "Angular icon" },
                        { src: "/components/abilities/__image/iconoDotNet.png", alt: ".NET icon" },
                        { src: "/components/abilities/__image/iconoSpringBoot.png", alt: "Spring Boot icon" },
                        { src: "/components/abilities/__image/iconoCPlusPlus.png", alt: "C++ icon" },
                        { src: "/components/abilities/__image/iconoSQLServer.png", alt: "SQL Server icon" },
                        { src: "/components/abilities/__image/iconoPostgreSQL.png", alt: "PostgreSQL icon" },
                        { src: "/components/abilities/__image/iconoTeachableMachine.png", alt: "Teachable Machine icon" },
                    ],
                },
                {
                    title: "Tools",
                    icons: [
                        { src: "/components/abilities/__image/iconoFigma.png", alt: "Figma icon" },
                        { src: "/components/abilities/__image/iconoGit.png", alt: "Git icon" },
                        { src: "/components/abilities/__image/iconoGithub.png", alt: "GitHub icon" },
                        { src: "/components/abilities/__image/iconoVsCode.png", alt: "VS Code icon" },
                        { src: "/components/abilities/__image/iconoIntelliJ.png", alt: "IntelliJ icon" },
                        { src: "/components/abilities/__image/iconoPostman.png", alt: "Postman icon" },
                        { src: "/components/abilities/__image/iconoDocker.png", alt: "Docker icon" },
                        { src: "/components/abilities/__image/iconoAzureDevOps.png", alt: "Azure DevOps icon" },
                        { src: "/components/abilities/__image/iconoNotion.png", alt: "Notion icon" },
                    ],
                },
            ],
        };
    }
}

customElements.define("abilities-section", AbilitiesSection);
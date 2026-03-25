import BaseSection from "../shared/BaseSection";
import { initProjectHoverBlur } from "./ResizeObserverAnimation";

type ProjectCard = {
    image: string;
    imageAlt: string;
    title: string;
    url: string;
    repositoryIcon: string;
};

type ProjectsTemplateData = {
    title: string;
    subtitle: string;
    repositoryLabel: string;
    moreProjectsUrl: string;
    moreProjectsLabel: string;
    moreProjectsIcon: string;
    projects: ProjectCard[];
};

class ProjectsSection extends BaseSection<ProjectsTemplateData> {
    private cleanupHoverBlur: (() => void) | null = null;

    protected async getTemplateData(): Promise<ProjectsTemplateData> {
        return {
            title: "Featured Projects",
            subtitle: "Projects that showcase my technical and creative skills.",
            repositoryLabel: "Repository",
            moreProjectsUrl: "https://github.com/FernandoTerrazasLl",
            moreProjectsLabel: "View more projects",
            moreProjectsIcon: "/components/projects/__image/iconoGithubMin.png",
            projects: [
                {
                    image: "/components/projects/__image/imagenMecaProyecto.png",
                    imageAlt: "Mechatronics Project",
                    title: "Mechatronics Reservation Web App - UCB",
                    url: "https://github.com/FernandoTerrazasLl/Mecatronics-Equipment-Reservation-Web-App-UCB",
                    repositoryIcon: "/components/projects/__image/iconoGithubMinNegro.png",
                },
                {
                    image: "/components/projects/__image/imagenArquitectura.png",
                    imageAlt: "x86 Architecture Simulator Project",
                    title: "x86 Architecture Simulator - Visual Basic",
                    url: "https://github.com/FernandoTerrazasLl/Simulador-de-Arquitectura-x86",
                    repositoryIcon: "/components/projects/__image/iconoGithubMinNegro.png",
                },
                {
                    image: "/components/projects/__image/imagenPasa.png",
                    imageAlt: "Bus Reservation Project",
                    title: "Bolivia Bus Reservation Web App",
                    url: "https://github.com/FernandoTerrazasLl/PASA",
                    repositoryIcon: "/components/projects/__image/iconoGithubMinNegro.png",
                },
            ],
        };
    }

    protected getCSSPath(): string {
        return "/components/projects/projects.css";
    }

    protected getHTMLPath(): string {
        return "/components/projects/projects.html";
    }

    protected async afterProcess(): Promise<void> {
        this.cleanupHoverBlur = initProjectHoverBlur(this.root);
    }

    disconnectedCallback(): void {
        this.cleanupHoverBlur?.();
        this.cleanupHoverBlur = null;
    }
}

customElements.define("projects-section", ProjectsSection);
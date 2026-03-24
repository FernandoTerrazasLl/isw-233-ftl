import BaseSection from "../shared/BaseSection.js";
import { initProjectHoverBlur } from "./ResizeObserverAnimation.js";

class ProjectsSection extends BaseSection {
    async getTemplateData() {
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

    getCSSPath() {
        return "/components/projects/projects.css"
    }

    getHTMLPath() {
        return "/components/projects/projects.html"
    }
    
    async afterProcess() {
        this._cleanupHoverBlur = initProjectHoverBlur(this.root);
    }

    disconnectedCallback() {
        this._cleanupHoverBlur?.();
        this._cleanupHoverBlur = null;
    }
}

customElements.define("projects-section", ProjectsSection);
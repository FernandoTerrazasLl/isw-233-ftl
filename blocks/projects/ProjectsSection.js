import BaseSection from "../shared/BaseSection.js";
import { initProjectHoverBlur } from "./ResizeObserverAnimation.js";
import Handlebars from "handlebars";

class ProjectsSection extends BaseSection {
    async getTemplateData() {
        return {
            title: "Featured Projects",
            subtitle: "Projects that showcase my technical and creative skills.",
            repositoryLabel: "Repository",
            moreProjectsUrl: "https://github.com/FernandoTerrazasLl",
            moreProjectsLabel: "View more projects",
            moreProjectsIcon: "/img/iconoGithubMin.png",
            projects: [
                {
                    image: "/img/imagenMecaProyecto.png",
                    imageAlt: "Mechatronics Project",
                    title: "Mechatronics Reservation Web App - UCB",
                    url: "https://github.com/FernandoTerrazasLl/Mecatronics-Equipment-Reservation-Web-App-UCB",
                    repositoryIcon: "/img/iconoGithubMinNegro.png",
                },
                {
                    image: "/img/imagenArquitectura.png",
                    imageAlt: "x86 Architecture Simulator Project",
                    title: "x86 Architecture Simulator - Visual Basic",
                    url: "https://github.com/FernandoTerrazasLl/Simulador-de-Arquitectura-x86",
                    repositoryIcon: "/img/iconoGithubMinNegro.png",
                },
                {
                    image: "/img/imagenPasa.png",
                    imageAlt: "Bus Reservation Project",
                    title: "Bolivia Bus Reservation Web App",
                    url: "https://github.com/FernandoTerrazasLl/PASA",
                    repositoryIcon: "/img/iconoGithubMinNegro.png",
                },
            ],
        };
    }

    getCSSPath() {
        return "/blocks/projects/projects.css"
    }

    getHTMLPath() {
        return "/blocks/projects/projects.html"
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
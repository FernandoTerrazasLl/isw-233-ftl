const template = document.createElement("template");
template.innerHTML = `
<section class="projects">
    <h2 class="projects__title">Featured Projects</h2>
    <p class="projects__subtitle">Projects that showcase my technical and creative skills.</p>

    <div class="projects__container">
        <div class="projects__project">
            <img src="img/imagenMecaProyecto.png" alt="Mechatronics Project" class="projects__project-image">
            <div class="projects__project-info">
                <h4 class="projects__project-title">Mechatronics Reservation Web App - UCB</h4>
                <a href="https://github.com/FernandoTerrazasLl/Mecatronics-Equipment-Reservation-Web-App-UCB" class="projects__project-link">
                    <img src="img/iconoGithubMinNegro.png" alt="GitHub icon" class="projects__project-link-icon"> Repository
                </a>
            </div>
        </div>

        <div class="projects__project">
            <img src="img/imagenArquitectura.png" alt="x86 Architecture Simulator Project" class="projects__project-image">
            <div class="projects__project-info">
                <h4 class="projects__project-title">x86 Architecture Simulator - Visual Basic</h4>
                <a href="https://github.com/FernandoTerrazasLl/Simulador-de-Arquitectura-x86" class="projects__project-link">
                    <img src="img/iconoGithubMinNegro.png" alt="GitHub icon" class="projects__project-link-icon"> Repository
                </a>
            </div>
        </div>

        <div class="projects__project">
            <img src="img/imagenPasa.png" alt="Bus Reservation Project" class="projects__project-image">
            <div class="projects__project-info">
                <h4 class="projects__project-title">Bolivia Bus Reservation Web App</h4>
                <a href="https://github.com/FernandoTerrazasLl/PASA" class="projects__project-link">
                    <img src="img/iconoGithubMinNegro.png" alt="GitHub icon" class="projects__project-link-icon"> Repository
                </a>
            </div>
        </div>
    </div>

    <a href="https://github.com/FernandoTerrazasLl" class="projects__more-link">
        <div class="projects__more-btn">
            <img src="img/iconoGithubMin.png" alt="GitHub icon" class="projects__github-more-btn">
            View more projects
        </div>
    </a>
</section>
`;

class ProjectsSection extends HTMLElement {
    constructor() {
        super();
        this.appendChild(template.content.cloneNode(true));
    }
}

customElements.define("projects-section", ProjectsSection);

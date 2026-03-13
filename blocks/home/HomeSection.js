const template = document.createElement("template");
template.innerHTML = `
<section class="home">
    <nav class="home__nav">
        <p class="home__nav-name">Fernando Terrazas Llanos</p>
        <div class="home__nav-links">
            <a href="/" class="home__nav-link">Home</a>
            <a href="/about" class="home__nav-link">About me</a>
            <a href="/projects" class="home__nav-link">Projects</a>
            <a href="/abilities" class="home__nav-link">Abilities</a>
            <a href="/education" class="home__nav-link">Education</a>
            <a href="/blog" class="home__nav-link">Blog</a>
        </div>
    </nav>
    <div class="home__background">
        <div class="home__intro">
            <h1>Fernando Terrazas Llanos</h1>
            <p class="home__profession">Software Engineering Student</p>
            <p class="home__phrase">If you can imagine it, you can program it</p>
            <p class="home__phrase">Transforming business ideas in digital systems</p>
        </div>
        <div class="home__social-media">
            <a href="https://github.com/FernandoTerrazasLl" class="home__social-link">
                <img src="img/iconoGithubMin.png" alt="GitHub icon">
            </a>
            <a href="https://www.linkedin.com/in/fernando-terrazas-llanos-960560267/" class="home__social-link">
                <img src="img/iconoLinkedinMin.png" alt="LinkedIn icon">
            </a>
            <a href="mailto:terrazasllanosfernando@gmail.com" class="home__social-link">
                <img src="img/iconoMailMin.png" alt="Email icon">
            </a>
        </div>

        <div class="home__contact">
            <a class="home__contact-link" href="mailto:terrazasllanosfernando@gmail.com">Contact Me</a>
        </div>
    </div>
</section>
`;

class HomeSection extends HTMLElement {
    constructor() {
        super();
        this.appendChild(template.content.cloneNode(true));
    }
}

customElements.define("home-section", HomeSection);

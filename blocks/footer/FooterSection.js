const template = document.createElement("template");
template.innerHTML = `
<footer class="footer">
    <div class="footer__container">
        <p class="footer__name">Fernando Terrazas Llanos</p>
        <p class="footer__role">Aspiring Backend Engineer</p>
        <div class="footer__social-media">
            <a href="https://github.com/FernandoTerrazasLl" class="footer__social-link">
                <img src="img/iconoGithubMin.png" alt="GitHub icon">
            </a>
            <a href="https://www.linkedin.com/in/fernando-terrazas-llanos-960560267/" class="footer__social-link">
                <img src="img/iconoLinkedinMin.png" alt="LinkedIn icon">
            </a>
            <a href="mailto:terrazasllanosfernando@gmail.com" class="footer__social-link">
                <img src="img/iconoMailMin.png" alt="Email icon">
            </a>
        </div>
        <div class="footer__links">
            <a href="/" class="footer__link">Home</a>
            <a href="/about" class="footer__link">About me</a>
            <a href="/projects" class="footer__link">Projects</a>
            <a href="/abilities" class="footer__link">Abilities</a>
            <a href="/education" class="footer__link">Education</a>
            <a href="/blog" class="footer__link">Blog</a>
        </div>
        <p class="footer__copyright">© 2026 All rights reserved</p>
    </div>
</footer>
`;

class FooterSection extends HTMLElement {
    constructor() {
        super();
        this.appendChild(template.content.cloneNode(true));
    }
}

customElements.define("footer-section", FooterSection);

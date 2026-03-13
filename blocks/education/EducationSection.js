const template = document.createElement("template");
template.innerHTML = `
<section class="education">
    <h2 class="education__title">Educations and Certifications</h2>

    <div class="education__container">
        <div class="education__group">
            <h4 class="education__group-title">Education</h4>
            <div class="education__group-info">
                <h4 class="education__card-title">Catholic Bolivian University</h4>
                <p class="education__card-role">Software Engineer</p>
                <p class="education__card-period">2023-2028</p>
            </div>
        </div>

        <div class="education__group">
            <h4 class="education__group-title">Profesional Certifications</h4>

            <div class="education__certifications">
                <div class="education__certification-card">
                    <h4 class="education__card-title">Harvard Aspire Institute Leadership</h4>
                    <p class="education__card-org">Aspire Institute</p>
                    <p class="education__card-topic">Leadership</p>
                </div>

                <div class="education__certification-card">
                    <h4 class="education__card-title">ISTQB Foundation Level</h4>
                    <p class="education__card-org">JB ENTERPRISE GROUP</p>
                    <p class="education__card-topic">Quality Assurance · Software Testing</p>
                </div>

                <div class="education__certification-card">
                    <h4 class="education__card-title">Computer Vision for Industrial Inspection</h4>
                    <p class="education__card-org">NVIDIA</p>
                    <p class="education__card-topic">IA · Computer Vision</p>
                </div>

                <div class="education__certification-card">
                    <h4 class="education__card-title">Oracle Next Education Back-end</h4>
                    <p class="education__card-org">Alura Latam</p>
                    <p class="education__card-topic">Java · Backend</p>
                </div>

                <div class="education__certification-card">
                    <h4 class="education__card-title">Lean Six Sigma White Belt Certification</h4>
                    <p class="education__card-org">Opex Online Academy</p>
                    <p class="education__card-topic">Agile Methodologies · Project Management</p>
                </div>
            </div>
        </div>
    </div>

    <div class="education__more-btn">
        <a href="https://www.linkedin.com/in/fernando-terrazas-llanos-960560267/" class="education__more-link">
            <img src="img/iconoLinkedinMin.png" alt="LinkedIn icon" class="education__more-link-icon">
            More information
        </a>
    </div>
</section>
`;

class EducationSection extends HTMLElement {
    constructor() {
        super();
        this.appendChild(template.content.cloneNode(true));
    }
}

customElements.define("education-section", EducationSection);

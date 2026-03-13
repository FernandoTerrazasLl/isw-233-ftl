const template = document.createElement("template");
template.innerHTML = `
<section class="abilities">
    <h2 class="abilities__title">Technical Abilities</h2>
    <div class="abilities__columns">
        <div class="abilities__column">
            <h4 class="abilities__column-title">Web</h4>
            <div class="abilities__icons">
                <img src="img/iconoHtml.png" alt="HTML icon" class="abilities__icon">
                <img src="img/iconoCss.png" alt="CSS icon" class="abilities__icon">
                <img src="img/iconoJs.png" alt="JavaScript icon" class="abilities__icon">
                <img src="img/iconoTypescript.png" alt="TypeScript icon" class="abilities__icon">
                <img src="img/iconoAngular.png" alt="Angular icon" class="abilities__icon">
                <img src="img/iconoDotNet.png" alt=".NET icon" class="abilities__icon">
                <img src="img/iconoSpringBoot.png" alt="Spring Boot icon" class="abilities__icon">
                <img src="img/iconoCPlusPlus.png" alt="C++ icon" class="abilities__icon">
                <img src="img/iconoSQLServer.png" alt="SQL Server icon" class="abilities__icon">
                <img src="img/iconoPostgreSQL.png" alt="PostgreSQL icon" class="abilities__icon">
                <img src="img/iconoTeachableMachine.png" alt="Teachable Machine icon" class="abilities__icon">
            </div>
        </div>

        <div class="abilities__column">
            <h4 class="abilities__column-title">Tools</h4>
            <div class="abilities__icons">
                <img src="img/iconoFigma.png" alt="Figma icon" class="abilities__icon">
                <img src="img/iconoGit.png" alt="Git icon" class="abilities__icon">
                <img src="img/iconoGithub.png" alt="GitHub icon" class="abilities__icon">
                <img src="img/iconoVsCode.png" alt="VS Code icon" class="abilities__icon">
                <img src="img/iconoIntelliJ.png" alt="IntelliJ icon" class="abilities__icon">
                <img src="img/iconoPostman.png" alt="Postman icon" class="abilities__icon">
                <img src="img/iconoDocker.png" alt="Docker icon" class="abilities__icon">
                <img src="img/iconoAzureDevOps.png" alt="Azure DevOps icon" class="abilities__icon">
                <img src="img/iconoNotion.png" alt="Notion icon" class="abilities__icon">
            </div>
        </div>
    </div>
</section>
`;

class AbilitiesSection extends HTMLElement {
    constructor() {
        super();
        this.appendChild(template.content.cloneNode(true));
    }
}

customElements.define("abilities-section", AbilitiesSection);

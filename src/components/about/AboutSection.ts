import BaseSection from "../shared/BaseSection";

type AboutTemplateData = {
    title: string;
    profilePhoto: string;
    backgroundImage: string;
    profileName: string;
    profileRole: string;
    description: string;
};

class AboutSection extends BaseSection<AboutTemplateData> {
    protected getCSSPath(): string {
        return "/components/about/about.css";
    }

    protected getHTMLPath(): string {
        return "/components/about/about.html";
    }

    protected async getTemplateData(): Promise<AboutTemplateData> {
        return {
            title: "About Me",
            profilePhoto: "/components/about/__image/imagenFernando.png",
            backgroundImage: "/components/about/__image/aboutMeFondoDePersona.png",
            profileName: "Fernando Terrazas Llanos",
            profileRole: "Aspiring Backend Developer Engineer",
            description:
                "A scholarship student at the Bolivian Catholic University, deeply passionate about technology and innovation. Certified with a B2 English TOEFL proficiency. I am committed to continuously acquiring new skills that enhance both my professional expertise and personal growth.",
        };
    }
}

customElements.define("about-section", AboutSection);
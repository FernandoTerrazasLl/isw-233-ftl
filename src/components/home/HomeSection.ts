import BaseSection from "../shared/BaseSection";

type SocialLink = {
    href: string;
    iconSrc: string;
    iconAlt: string;
};

type HomeTemplateData = {
    name: string;
    profession: string;
    phrases: string[];
    socialLinks: SocialLink[];
};

class HomeSection extends BaseSection<HomeTemplateData> {
    protected getCSSPath(): string {
        return "/components/home/home.css";
    }

    protected getHTMLPath(): string {
        return "/components/home/home.html";
    }

    protected async getTemplateData(): Promise<HomeTemplateData> {
        return {
            name: "Fernando Terrazas Llanos",
            profession: "Software Engineering Student",
            phrases: [
                "If you can imagine it, you can program it",
                "Transforming business ideas in digital systems",
            ],
            socialLinks: [
                {
                    href: "https://github.com/FernandoTerrazasLl",
                    iconSrc: "/components/home/__image/iconoGithubMin.png",
                    iconAlt: "GitHub icon",
                },
                {
                    href: "https://www.linkedin.com/in/fernando-terrazas-llanos-960560267/",
                    iconSrc: "/components/home/__image/iconoLinkedinMin.png",
                    iconAlt: "LinkedIn icon",
                },
                {
                    href: "mailto:terrazasllanosfernando@gmail.com",
                    iconSrc: "/components/home/__image/iconoMailMin.png",
                    iconAlt: "Email icon",
                },
            ],
        };
    }
}

customElements.define("home-section", HomeSection);

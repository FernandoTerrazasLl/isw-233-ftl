import BaseSection from "../shared/BaseSection";

type Certification = {
    title: string;
    organization: string;
    topic: string;
};

type EducationTemplateData = {
    title: string;
    educationLabel: string;
    university: string;
    role: string;
    period: string;
    certificationsLabel: string;
    certifications: Certification[];
    linkedinUrl: string;
    linkedinIcon: string;
    moreInfoLabel: string;
};

class EducationSection extends BaseSection<EducationTemplateData> {
    protected getCSSPath(): string {
        return "/components/education/education.css";
    }

    protected getHTMLPath(): string {
        return "/components/education/education.html";
    }

    protected async getTemplateData(): Promise<EducationTemplateData> {
        return {
            title: "Educations and Certifications",
            educationLabel: "Education",
            university: "Catholic Bolivian University",
            role: "Software Engineer",
            period: "2023-2028",
            certificationsLabel: "Professional Certifications",
            certifications: [
                {
                    title: "Harvard Aspire Institute Leadership",
                    organization: "Aspire Institute",
                    topic: "Leadership",
                },
                {
                    title: "ISTQB Foundation Level",
                    organization: "JB ENTERPRISE GROUP",
                    topic: "Quality Assurance · Software Testing",
                },
                {
                    title: "Computer Vision for Industrial Inspection",
                    organization: "NVIDIA",
                    topic: "AI · Computer Vision",
                },
                {
                    title: "Oracle Next Education Back-end",
                    organization: "Alura Latam",
                    topic: "Java · Backend",
                },
                {
                    title: "Lean Six Sigma White Belt Certification",
                    organization: "Opex Online Academy",
                    topic: "Agile Methodologies · Project Management",
                },
            ],
            linkedinUrl: "https://www.linkedin.com/in/fernando-terrazas-llanos-960560267/",
            linkedinIcon: "/components/education/__image/iconoLinkedinMin.png",
            moreInfoLabel: "More information",
        };
    }
}

customElements.define("education-section", EducationSection);
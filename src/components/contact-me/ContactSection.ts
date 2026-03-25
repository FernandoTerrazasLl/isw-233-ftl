import BaseSection from "../shared/BaseSection";

type ContactField = {
    wrapperClass: string;
    labelClass: string;
    inputClass: string;
    inputType: string;
    label: string;
    placeholder: string;
};

type ContactTemplateData = {
    title: string;
    fields: ContactField[];
    messageLabel: string;
    messagePlaceholder: string;
    submitLabel: string;
};

class ContactSection extends BaseSection<ContactTemplateData> {
    protected getCSSPath(): string {
        return "/components/contact-me/contact-me.css";
    }

    protected getHTMLPath(): string {
        return "/components/contact-me/contact-me.html";
    }

    protected async getTemplateData(): Promise<ContactTemplateData> {
        return {
            title: "Contact Me",
            fields: [
                {
                    wrapperClass: "contact-me__name",
                    labelClass: "contact-me__name-title",
                    inputClass: "contact-me__name-input",
                    inputType: "text",
                    label: "Full Name",
                    placeholder: "Your Name",
                },
                {
                    wrapperClass: "contact-me__email",
                    labelClass: "contact-me__email-title",
                    inputClass: "contact-me__email-input",
                    inputType: "email",
                    label: "Email",
                    placeholder: "Your Email",
                },
                {
                    wrapperClass: "contact-me__phone",
                    labelClass: "contact-me__phone-title",
                    inputClass: "contact-me__phone-input",
                    inputType: "text",
                    label: "Phone",
                    placeholder: "Your Phone",
                },
            ],
            messageLabel: "Message",
            messagePlaceholder: "Your Message",
            submitLabel: "Submit",
        };
    }
}

customElements.define("contact-section", ContactSection);
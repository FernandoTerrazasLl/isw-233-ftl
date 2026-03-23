import BaseSection from "../shared/BaseSection.js";

class ContactSection extends BaseSection {
    getCSSPath() {
        return "/blocks/contact-me/contact-me.css";
    }

    getHTMLPath() {
        return "/blocks/contact-me/contact-me.html";
    }

    async getTemplateData() {
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
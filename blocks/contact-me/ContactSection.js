const template = document.createElement("template");
template.innerHTML = `
<section class="contact-me">
    <h2 class="contact-me__title">Contact Me</h2>
    <form class="contact-me__form">
        <div class="contact-me__name">
            <p class="contact-me__name-title">Full Name</p>
            <input class="contact-me__name-input" type="text" placeholder="Your Name" required>
        </div>
        <div class="contact-me__email">
            <p class="contact-me__email-title">Email</p>
            <input class="contact-me__email-input" type="email" placeholder="Your Email" required>
        </div>
        <div class="contact-me__phone">
            <p class="contact-me__phone-title">Phone</p>
            <input class="contact-me__phone-input" type="text" placeholder="Your Phone" required>
        </div>
        <div class="contact-me__message">
            <p class="contact-me__message-title">Message</p>
            <textarea class="contact-me__message-input" placeholder="Your Message" required></textarea>
        </div>
        <button class="contact-me__send" type="submit">Submit</button>
    </form>
</section>
`;

class ContactSection extends HTMLElement {
    constructor() {
        super();
        this.appendChild(template.content.cloneNode(true));
    }
}

customElements.define("contact-section", ContactSection);

const template = document.createElement("template");
template.innerHTML = `
<section class="blog">
    <h2 class="blog__title">Blog</h2>
    <div class="blog__search">
        <div class="blog__search-container">
            <input type="text" placeholder="Search..." class="blog__search-input">
            <button class="blog__search-button">Search</button>
        </div>
        <button class="blog__categories-button">Categories</button>
        <div class="blog__categories-list"></div>
    </div>

    <div class="blog__container"><!-- Blog posts will be dynamically loaded here --></div>
</section>
`;

class BlogSection extends HTMLElement {
    constructor() {
        super();
        this.appendChild(template.content.cloneNode(true));
    }
}

customElements.define("blog-section", BlogSection);

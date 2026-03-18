import Storage from "../../services/Storage.js";
import { favoriteMixin } from "./favorite-mixin.js";
import { categorySubject } from "./category-subject.js";

let blogsList = [];
let currentCategory = null;
let currentRoot = document;

const applyCategoryFilter = (category) => {
    currentCategory = category || null;
    const filtered = currentCategory
        ? blogsList.filter((post) => post.category === currentCategory)
        : blogsList;

    renderer.render(filtered, currentRoot);
};

class BlogRenderer {
    render(blogs, rootNode = document) {
        const container = rootNode.querySelector(".blog__container");
        if (!container) return;

        container.innerHTML = blogs
            .map((blog) => {
                const isFav = Storage.isFavorite(blog.id);
                const star = isFav ? "★" : "☆";

                return `
            <div class="blog__article">
                <img src="${blog.image}" alt="${blog.title}" class="blog__article-image">
                <div class="blog__article-info">
                    <h4 class="blog__article-title">${blog.title}</h4>
                    <button class="blog__favorite" data-id="${blog.id}" 
                        style="font-size: 24px; background: none; border: none; cursor: pointer;">
                        ${star}
                    </button>
                </div>
            </div>`;
            })
            .join("\n");

        this.attachFavoriteHandlers(rootNode); // mixin
    }
}
Object.assign(BlogRenderer.prototype, favoriteMixin);

const renderer = new BlogRenderer();

export const init_blogs = async (rootNode = document) => {
    currentRoot = rootNode;

    if (!blogsList.length) {
        const res = await fetch("/data/blogs.json");
        blogsList = await res.json();
    }

    categorySubject.addObserver(applyCategoryFilter);

    const filtered = currentCategory
        ? blogsList.filter((post) => post.category === currentCategory)
        : blogsList;

    renderer.render(filtered, currentRoot);
};


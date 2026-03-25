import Storage from "../../services/Storage";
import { attachFavoriteHandlers } from "./favorite-mixin";
import { categorySubject } from "./category-subject";
import type { BlogPost } from "./types";

type RootNode = Document | ShadowRoot;

let blogsList: BlogPost[] = [];
let currentCategory: string | null = null;
let currentRoot: RootNode = document;

const applyCategoryFilter = (category: string | null): void => {
    currentCategory = category || null;
    const filtered = currentCategory
        ? blogsList.filter((post) => post.category === currentCategory)
        : blogsList;

    renderer.render(filtered, currentRoot);
};

class BlogRenderer {
    render(blogs: BlogPost[], rootNode: RootNode = document): void {
        const container = rootNode.querySelector<HTMLElement>(".blog__container");
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

        attachFavoriteHandlers(rootNode);
    }
}

const renderer = new BlogRenderer();

export const init_blogs = async (rootNode: RootNode = document): Promise<void> => {
    currentRoot = rootNode;

    if (!blogsList.length) {
        const res = await fetch("/data/blogs.json");
        blogsList = (await res.json()) as BlogPost[];
    }

    categorySubject.addObserver(applyCategoryFilter);

    const filtered = currentCategory
        ? blogsList.filter((post) => post.category === currentCategory)
        : blogsList;

    renderer.render(filtered, currentRoot);
};


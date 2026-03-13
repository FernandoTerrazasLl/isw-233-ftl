import Storage from "../../services/Storage.js";

let blogsList = [];

const renderBlogs = (blogs) => {
    const container = document.querySelector(".blog__container");
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

    container.querySelectorAll(".blog__favorite").forEach((button) => {
        button.addEventListener("click", () => {
            const id = Number(button.dataset.id);
            const isFav = Storage.toggleFavorite(id);
            button.textContent = isFav ? "★" : "☆";
        });
    });
};

export const init_blogs = async () => {
    const res = await fetch("./data/blogs.json");
    blogsList = await res.json();
    renderBlogs(blogsList);
};

export const filterBlogsByCategory = (category) => {
    if (!category) {
        renderBlogs(blogsList);
        return;
    }

    const filtered = blogsList.filter((post) => post.category === category);
    renderBlogs(filtered);
};

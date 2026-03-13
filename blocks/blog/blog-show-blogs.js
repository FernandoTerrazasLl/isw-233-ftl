let blogsList = [];

const renderBlogs = (blogs) => {
    const container = document.querySelector(".blog__container");
    if (!container) return;

    container.innerHTML = blogs
        .map(
            (blog) => `
            <div class="blog__article">
                <img src="${blog.image}" alt="${blog.title}" class="blog__article-image">
                <div class="blog__article-info">
                    <h4 class="blog__article-title">${blog.title}</h4>
                </div>
            </div>`
        )
        .join("\n");
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

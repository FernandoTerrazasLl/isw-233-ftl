export const init_blogs = async () => {
    const container = document.querySelector(".blog__container");
    if (!container) return;
    
    const res = await fetch("./data/blogs.json");
    const blogs = await res.json();

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

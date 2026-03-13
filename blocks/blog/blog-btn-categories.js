const renderCategories = (categories, filtrarPorCategoria) => {
    const container = document.querySelector(".blog__categories-list");
    if (!container) return;

    container.innerHTML = categories
        .map(
            (category) => `
        <button class="blog__category" data-category="${category.name}">
            <div class="blog__category-info">
                <strong>${category.name}</strong>
            </div>
        </button>`
        )
        .join("\n");

    container.querySelectorAll(".blog__category").forEach((button) => {
        button.addEventListener("click", () => {
            filtrarPorCategoria(button.dataset.category);
        });
    });
};

export const initCategories = async (filterBlogsByCategory) => {
    const button = document.querySelector(".blog__categories-button");
    const container = document.querySelector(".blog__categories-list");
    if (!button || !container) return;

    let data_categories = null;

    container.style.display = "none";

    button.addEventListener("click", async () => {
        if (!data_categories) {
            const res = await fetch("./data/categories.json");
            data_categories = await res.json();
            renderCategories(data_categories, filterBlogsByCategory);
        }

        container.style.display = container.style.display === "none" ? "flex" : "none";
    });
};

const renderCategories = (categories) => {
    const container = document.querySelector(".blog__categories-list");
    if (!container) return;

    container.innerHTML = categories
        .map(
            (category) => `
        <button class="blog__category">
            <div class="blog__category-info">
                <strong>${category.name}</strong>
            </div>
        </button>`
        )
        .join("\n");
};

export const initCategories = async () => {
    const button = document.querySelector(".blog__categories-button");
    const container = document.querySelector(".blog__categories-list");
    if (!button || !container) return;

    let data_categories = null;

    container.style.display = "none";

    button.addEventListener("click", async () => {
        if (!data_categories) {
            const res = await fetch("./data/categories.json");
            data_categories = await res.json();
            renderCategories(data_categories);
        }

        container.style.display = container.style.display === "none" ? "flex" : "none";//para hidden o no
    });
};

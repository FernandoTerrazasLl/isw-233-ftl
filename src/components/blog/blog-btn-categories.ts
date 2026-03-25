import { categorySubject } from "./category-subject";
import type { BlogCategory } from "./types";

type RootNode = Document | ShadowRoot;

const renderCategories = (categories: BlogCategory[], rootNode: RootNode = document): void => {
    const container = rootNode.querySelector<HTMLElement>(".blog__categories-list");
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

    container.querySelectorAll<HTMLButtonElement>(".blog__category").forEach((button) => {
        button.addEventListener("click", () => {
            categorySubject.notifyObservers(button.dataset.category ?? null);
        });
    });
};

export const initCategories = async (rootNode: RootNode = document): Promise<void> => {
    const button = rootNode.querySelector<HTMLButtonElement>(".blog__categories-button");
    const container = rootNode.querySelector<HTMLElement>(".blog__categories-list");
    if (!button || !container) return;

    let dataCategories: BlogCategory[] | null = null;

    container.style.display = "none";

    button.addEventListener("click", async () => {
        if (!dataCategories) {
            const res = await fetch("/data/categories.json");
            dataCategories = (await res.json()) as BlogCategory[];
            renderCategories(dataCategories, rootNode);
        }

        container.style.display = container.style.display === "none" ? "flex" : "none";
    });
};

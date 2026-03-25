import Storage from "../../services/Storage";

type RootNode = Document | ShadowRoot;

export function attachFavoriteHandlers(rootNode: RootNode = document, containerSelector = ".blog__container"): void {
    const container = rootNode.querySelector<HTMLElement>(containerSelector);
    if (!container) return;

    const buttons = container.querySelectorAll<HTMLButtonElement>(".blog__favorite");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const id = Number(button.dataset.id);
            if (!Number.isFinite(id)) return;

            const isFavorite = Storage.toggleFavorite(id);
            button.textContent = isFavorite ? "★" : "☆";
        });
    });
}

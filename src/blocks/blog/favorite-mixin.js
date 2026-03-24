import Storage from "../../services/Storage.js";

const favoriteMixin = {
    attachFavoriteHandlers(rootNode = document, containerSelector = ".blog__container") {
        const container = rootNode.querySelector(containerSelector);
        if (!container) return;

        container.querySelectorAll(".blog__favorite").forEach((button) => {
            button.addEventListener("click", () => {
                const id = Number(button.dataset.id);
                const isFav = Storage.toggleFavorite(id);
                button.textContent = isFav ? "★" : "☆";
            });
        });
    },
};

export { favoriteMixin };

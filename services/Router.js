const Router = {
    routes: {
        "/": "home-section",
        "/about": "about-section",
        "/projects": "projects-section",
        "/abilities": "abilities-section",
        "/education": "education-section",
        "/blog": "blog-section",
        "/contact": "contact-section"
    },

    getAnchorFromEvent(event) {
        const path = typeof event.composedPath === "function" ? event.composedPath() : [];
        for (const node of path) {
            if (node instanceof HTMLAnchorElement) {
                return node;
            }
        }
        return null;
    },

    go(route, addToHistory = true) {
        const routeString = this.routes[route] ? route : "/";

        if (addToHistory) {
            history.pushState({ route: routeString }, "", routeString);
        }

        const sectionId = this.routes[routeString];
        if (!sectionId) return;

        const section = document.createElement(sectionId);

        const main = document.querySelector(".main");
        if (!main) return;

        main.firstElementChild?.remove();
        main.appendChild(section);

        document.body.dataset.route = routeString;
        window.scrollTo(0, 0);
    },

    init() {
        document.addEventListener("click", (event) => {
            const anchor = this.getAnchorFromEvent(event);
            if (!anchor) return;

            const href = anchor.getAttribute("href");
            if (!href || !href.startsWith("/")) return;

            event.preventDefault();
            this.go(href);
        });

        window.addEventListener("popstate", (event) => {
            const route = event.state?.route || window.location.pathname;
            this.go(route, false);
        });

        this.go(window.location.pathname, false);
    }
};

export default Router;
type RoutePath = "/" | "/about" | "/projects" | "/abilities" | "/education" | "/blog" | "/contact";

const routes: Record<RoutePath, string> = {
    "/": "home-section",
    "/about": "about-section",
    "/projects": "projects-section",
    "/abilities": "abilities-section",
    "/education": "education-section",
    "/blog": "blog-section",
    "/contact": "contact-section",
};

type RouteState = {
    route?: string;
};

const Router = {
    routes,

    getAnchorFromEvent(event: MouseEvent): HTMLAnchorElement | null {
        const path = typeof event.composedPath === "function" ? event.composedPath() : [];

        for (const node of path) {
            if (node instanceof HTMLAnchorElement) {
                return node;
            }
        }

        return null;
    },

    resolveRoute(route: string): RoutePath {
        return route in this.routes ? (route as RoutePath) : "/";
    },

    go(route: string, addToHistory = true): void {
        const routePath = this.resolveRoute(route);

        if (addToHistory) {
            history.pushState({ route: routePath }, "", routePath);
        }

        const sectionId = this.routes[routePath];
        const section = document.createElement(sectionId);

        const main = document.querySelector<HTMLElement>(".main");
        if (!main) return;

        main.firstElementChild?.remove();
        main.appendChild(section);

        document.body.dataset.route = routePath;
        window.scrollTo(0, 0);
    },

    init(): void {
        document.addEventListener("click", (event: MouseEvent) => {
            const anchor = this.getAnchorFromEvent(event);
            if (!anchor) return;

            if (anchor.target === "_blank") return;

            const href = anchor.getAttribute("href");
            if (!href || !href.startsWith("/")) return;

            event.preventDefault();
            this.go(href);
        });

        window.addEventListener("popstate", (event: PopStateEvent) => {
            const state = event.state as RouteState | null;
            const route = state?.route ?? window.location.pathname;
            this.go(route, false);
        });

        this.go(window.location.pathname, false);
    },
};

export default Router;
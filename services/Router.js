const Router = {
    routes: {
        "/": "home",
        "/about": "about",
        "/projects": "projects",
        "/abilities": "abilities",
        "/education": "education",
        "/blog": "blog",
        "/contact": "contact"
    },

    go(route, addToHistory = true) {
        if (addToHistory) {
            history.pushState({ route }, "", route);
        }

        const sectionId = this.routes[route];
        const section = sectionId ? document.getElementById(sectionId) : null;
        if (!section) return;

        section.scrollIntoView();
    },

    init() {
        document.querySelectorAll("a.home__nav-link, a.footer__link").forEach((link) => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                const href = event.currentTarget.getAttribute("href");
                this.go(href);
            });
        });
        //CUANDO APRETO EL BOTON DE ATRAS O ADELANTE DEL NAVEGADOR
        window.addEventListener("popstate", (event) => {
            const route = event.state?.route || window.location.pathname;
            this.go(route, false);
        });

        this.go(window.location.pathname, false);
    }
};

export default Router;
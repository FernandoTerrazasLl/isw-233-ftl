class CategorySubject {
    constructor() {
        this.observers = new Set();
    }

    addObserver(observer) {
        this.observers.add(observer);
    }

    removeObserver(observer) {
        this.observers.delete(observer);
    }

    notifyObservers(category) {
        this.observers.forEach((observer) => observer(category));
    }
}

export const categorySubject = new CategorySubject();

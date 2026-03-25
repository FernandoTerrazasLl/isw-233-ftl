export type CategoryObserver = (category: string | null) => void;

class CategorySubject {
    private readonly observers = new Set<CategoryObserver>();

    addObserver(observer: CategoryObserver): void {
        this.observers.add(observer);
    }

    removeObserver(observer: CategoryObserver): void {
        this.observers.delete(observer);
    }

    notifyObservers(category: string | null): void {
        this.observers.forEach((observer) => observer(category));
    }
}

export const categorySubject = new CategorySubject();

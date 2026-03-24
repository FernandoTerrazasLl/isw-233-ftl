class Storage {
    constructor() {
        this.KEY_FAVORITES = "blogFavorites";
    }

    _write(value) {
        localStorage.setItem(this.KEY_FAVORITES, JSON.stringify(value));
    }

    getFavorites() {
        const raw = localStorage.getItem(this.KEY_FAVORITES);
        if (!raw) return [];
        return JSON.parse(raw);
    }

    isFavorite(id) {
        return this.getFavorites().includes(id);
    }

    addFavorite(id) {
        const list = new Set(this.getFavorites());
        list.add(id);
        this._write([...list]);
    }

    removeFavorite(id) {
        const list = new Set(this.getFavorites());
        list.delete(id);
        this._write([...list]);
    }

    toggleFavorite(id) {
        if (this.isFavorite(id)) {
            this.removeFavorite(id);
            return false;
        }
        this.addFavorite(id);
        return true;
    }
}

const storage = new Storage();//singleton
export default storage;

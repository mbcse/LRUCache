class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key) {
        if(!key) throw new Error('Key is required');
        if (!this.cache.has(key)) return -1;

        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);

        return value;
    }
    
    put(key, value) {
        if (!key) throw new Error('Key is required');
        if (!value) throw new Error('Value is required');
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }

        if (this.cache.size >= this.capacity) {
            const leastUsedKey = this.cache.keys().next().value;
            this.cache.delete(leastUsedKey);
        }

        this.cache.set(key, value);
    }
}



module.exports = LRUCache;

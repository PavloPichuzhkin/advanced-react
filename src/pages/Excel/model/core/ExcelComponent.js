import { DomListener } from './DomListener';

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners);
        this.name = options.name || '';
        this.emitter = options.emitter;
        this.unsubscribers = [];

        this.subscribe = options.subscribe || [];

        this.store = options.store;

        this.prepare();
    }

    prepare() {}

    toHTML() {
        return '';
    }

    storeChanged() {}

    isWatching(key) {
        return this.subscribe.includes(key);
    }

    $dispatch(action) {
        this.store.dispatch(action);
    }

    // Notify listeners about the event
    $emit(event, ...args) {
        this.emitter.emit(event, ...args);
    }

    // Subscribe to the event
    $on(event, fn) {
        const unsub = this.emitter.subscribe(event, fn);
        this.unsubscribers.push(unsub);
    }

    init() {
        this.initDOMListeners();
    }

    destroy() {
        this.removeDOMListeners();
        this.unsubscribers.forEach((unsub) => unsub());
    }
}

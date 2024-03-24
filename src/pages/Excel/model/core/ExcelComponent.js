import { DomListener } from './DomListener';

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners);
        this.name = options.name || '';
        this.emitter = options.emitter;
        this.unsubscribers = [];

        this.store = options.store;
        this.storeSub = null;

        this.prepare();
    }

    prepare() {}

    toHTML() {
        return '';
    }

    $dispatch(action) {
        this.store.dispatch(action);
    }

    $subscribe(fn) {
        this.storeSub = this.store.subscribe(fn);
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
        this.storeSub.unsubscribe();
    }
}

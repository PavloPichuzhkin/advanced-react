import { capitalize } from './utils';

const getMethodName = (eventName) => {
    return `on${capitalize(eventName)}`;
};

export class DomListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw new Error(`No $root provided for DomListener!`);
        }
        this.$root = $root;
        this.listeners = listeners;
    }

    initDOMListeners() {
        this.listeners.forEach((listener) => {
            const method = getMethodName(listener);
            if (!this[method]) {
                const name = this.name || '';
                throw new Error(
                    `Method ${method} is not implemented in ${name} Component`,
                );
            }
            this[method] = this[method].bind(this);
            // addEventListener
            this.$root.on(listener, this[method]);
        });
    }

    removeDOMListeners() {
        this.listeners.forEach((listener) => {
            const method = getMethodName(listener);
            // console.log('removeDOMListeners', this.name, this[method]);
            this.$root.off(listener, this[method]);
        });
    }
}

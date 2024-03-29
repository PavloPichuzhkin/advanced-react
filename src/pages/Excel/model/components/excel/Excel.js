import { $ } from '../../core/dom';
import { Emitter } from '../../core/Emitter';
import { StoreSubscriber } from '../../core/StoreSubscriber';

export class Excel {
    constructor(selector, options) {
        this.$el = $(selector);
        this.components = options.components || [];
        this.emitter = new Emitter();

        this.store = options.store;
        this.subscriber = new StoreSubscriber(this.store);
    }

    getRoot() {
        const $root = $.create('div', 'excel');
        // console.log($root);
        const componentOptions = {
            emitter: this.emitter,
            store: this.store,
        };

        this.components = this.components.map((Component) => {
            const $el = $.create('div', Component.className);

            const component = new Component($el, componentOptions);

            // DEBUG
            // window.cToolbar.destroy()
            // window.cToolbar.init()
            // window.cTable.destroy()
            if (__IS_DEV__ && component.name) {
                window[`c${component.name}`] = component;
            }

            $el.html(component.toHTML());
            $root.append($el);
            return component;
        });

        return $root;
    }

    clearRoot() {
        this.$el.removeChildren();
    }

    render() {
        this.$el.append(this.getRoot());

        this.subscriber.subscribeComponents(this.components);

        this.components.forEach((component) => {
            return component.init();
        });
    }

    destroy() {
        this.subscriber.unsubscribeFromStore();
        this.components.forEach((component) => component.destroy());
    }
}

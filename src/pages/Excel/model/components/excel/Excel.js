import { $ } from '../../core/dom';
import { Emitter } from '../../core/Emitter';

export class Excel {
    constructor(selector, options) {
        this.$el = $(selector);
        this.components = options.components || [];
        this.emitter = new Emitter();

        this.store = options.store;
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

        // eslint-disable-next-line consistent-return
        this.components.forEach((component) => {
            // if (component.name !== 'Toolbar') {
            return component.init();
            // }
        });
    }

    destroy() {
        this.components.forEach((component) => component.destroy());
    }
}

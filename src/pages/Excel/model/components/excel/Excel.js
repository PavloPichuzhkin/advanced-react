import { $ } from '../../core/dom';

export class Excel {
    constructor(selector, options) {
        this.$el = $(selector);
        this.components = options.components || [];
    }

    getRoot() {
        const $root = $.create('div', 'excel');
        console.log($root);

        this.components = this.components.map((Component) => {
            const $el = $.create('div', Component.className);
            const component = new Component($el);

            // DEBUG
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
}

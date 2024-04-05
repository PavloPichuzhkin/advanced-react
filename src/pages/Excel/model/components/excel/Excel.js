import { $ } from '../../core/dom';
import { Emitter } from '../../core/Emitter';
import { StoreSubscriber } from '../../core/StoreSubscriber';
import { preventDefault } from '../../core/utils';
import * as actions from '../../redux/actions';

export class Excel {
    constructor(options) {
        // this.$el = $(selector);
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

    init() {
        if (!__IS_DEV__) {
            document.addEventListener('contextmenu', preventDefault);
        }
        this.store.dispatch(actions.updateOpenedDate());

        this.subscriber.subscribeComponents(this.components);
        this.components.forEach((component) => component.init());
    }

    destroy() {
        this.subscriber.unsubscribeFromStore();
        this.components.forEach((component) => component.destroy());

        document.removeEventListener('contextmenu', preventDefault);
    }
}

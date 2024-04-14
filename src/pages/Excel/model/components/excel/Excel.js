import { $ } from '../../core/dom';
import { Emitter } from '../../core/Emitter';
import { StoreSubscriber } from '../../core/store/StoreSubscriber';
import { preventDefault } from '../../core/utils';
import * as actions from '../../redux/actions';

export class Excel {
    constructor(options) {
        this.components = options.components || [];
        this.emitter = new Emitter();

        this.store = options.store;
        this.subscriber = new StoreSubscriber(this.store);

        this.$root = null;
    }

    getRoot() {
        this.$root = $.create('div', 'excel', 'Excel');

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
            this.$root.append($el);
            return component;
        });

        return this.$root;
    }

    init() {
        if (!__IS_DEV__) {
            this.$root.$el.addEventListener('contextmenu', preventDefault);
        }
        this.store.dispatch(actions.updateOpenedDate());

        this.subscriber.subscribeComponents(this.components);
        this.components.forEach((component) => component.init());
    }

    destroy() {
        this.subscriber.unsubscribeFromStore();
        this.components.forEach((component) => component.destroy());

        this.$root.$el.removeEventListener('contextmenu', preventDefault);
    }
}

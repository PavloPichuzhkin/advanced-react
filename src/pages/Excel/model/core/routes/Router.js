import { $ } from '../dom';
import { ActiveRoute } from './ActiveRoute';

import { Spinner } from '../../components/loader/Spinner';

export class Router {
    constructor(selector, routes) {
        if (!selector) {
            throw new Error('Selector is not provided in Router');
        }

        this.$placeholder = $(selector);
        this.routes = routes;

        this.page = null;
        this.loader = new Spinner();

        this.changePageHandler = this.changePageHandler.bind(this);

        this.init();
    }

    init() {
        // window.addEventListener('hashchange', this.changePageHandler);
        // Routing control is given to the Exel.tsx (2 renders)
        this.changePageHandler();
    }

    async changePageHandler() {
        // if (this.page) { //page destroyed in the Exel.tsx useEffect
        //     console.log(this.page, 'destroyed');
        //     this.page.destroy();
        // }

        this.$placeholder.clear().append(this.loader);

        const Page = ActiveRoute.path.includes('excel')
            ? this.routes.excel
            : this.routes.dashboard;

        this.page = new Page(ActiveRoute.param);

        const root = await this.page.getRoot();

        this.$placeholder.clear().append(root);

        this.page.afterRender();
    }

    destroy() {
        // window.removeEventListener('hashchange', this.changePageHandler);
        if (this.page) {
            this.$placeholder.clear();
            this.page.destroy();
        }
    }
}

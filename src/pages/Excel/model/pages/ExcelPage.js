import { Page } from './Page';
import { createStore } from '../core/createStore';
import { debounce, storage } from '../core/utils';
import { rootReducer } from '../redux/rootReducer';
import { normalizeInitialState } from '../redux/initialState';
import { Excel } from '../components/excel/Excel';
import { Header } from '../components/header/Header';
import { Toolbar } from '../components/toolbar/Toolbar';
import { Formula } from '../components/formula/Formula';
import { Table } from '../components/table/Table';

export class ExcelPageClass extends Page {
    getRoot() {
        // console.log(normalizeInitialState(this.params));
        // const store = createStore(rootReducer, initialState);
        const params = this.params ? this.params : Date.now().toString();

        const store = createStore(rootReducer, normalizeInitialState(params));

        const stateListener = debounce((state) => {
            // console.log('App State: ', state);
            storage(`excel: ${params}`, state);
        }, 400);

        store.subscribe(stateListener);

        this.excel = new Excel({
            components: [Header, Toolbar, Formula, Table],
            store,
        });

        return this.excel.getRoot();
    }

    afterRender() {
        this.excel.init();
    }

    destroy() {
        this.excel.destroy();
    }
}

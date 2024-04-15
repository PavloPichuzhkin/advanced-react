import { storage } from '../core/utils';
import { storageName } from './initialState';

export class LocalStorageClient {
    constructor(name) {
        this.name = storageName(name);
    }

    save(state) {
        storage(this.name, state);
        if (__IS_DEV__) {
            window.redux = state;
        }
        return Promise.resolve();
    }

    get() {
        return new Promise((resolve) => {
            const state = storage(this.name);

            setTimeout(() => {
                resolve(state);
            }, 1500);
        });
    }
}

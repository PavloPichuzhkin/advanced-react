import { ExcelComponent } from './ExcelComponent';

export class ExcelStateComponent extends ExcelComponent {
    // constructor(...args) {
    //     super(...args);
    // }

    // get template() {
    //     // return JSON.stringify(this.state, null, 2);
    //     return '';
    // }

    initState(initialState = {}) {
        this.state = { ...initialState };
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.$root.html(this.template);
    }
}

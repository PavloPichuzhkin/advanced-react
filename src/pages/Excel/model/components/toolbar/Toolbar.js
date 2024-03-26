import { createToolbar } from './toolbar.template';
import { $ } from '../../core/dom';
import { ExcelStateComponent } from '../../core/ExcelStateComponent';

export class Toolbar extends ExcelStateComponent {
    static className = 'excel__toolbar';

    constructor($root, options) {
        super($root, {
            name: 'Toolbar',
            listeners: ['click'],
            ...options,
        });
    }

    prepare() {
        const initialState = {
            textAlign: 'left',
            fontWeight: 'normal',
            textDecoration: 'none',
            fontStyle: 'normal',
        };
        this.initState(initialState);
    }

    get template() {
        return createToolbar(this.state);
    }

    toHTML() {
        return this.template;
    }

    onClick(event) {
        const $target = $(event.target);
        // $target.addClass('active');
        if ($target.data.type === 'button') {
            // console.log($target.data.value);
            const value = JSON.parse($target.data.value);
            // const key = Object.keys(value)[0];
            // this.setState({ [key]: value[key] });
            this.setState(value);

            console.log(this.state);
        }
    }
}

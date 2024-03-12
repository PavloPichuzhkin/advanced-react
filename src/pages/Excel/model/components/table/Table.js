import { createTable } from './table.template';
import { ExcelComponent } from '../../core/ExcelComponent';

export class Table extends ExcelComponent {
    static className = 'excel__table';

    constructor($root) {
        super($root, {
            name: 'Toolbar',
            listeners: ['click'],
        });
    }

    toHTML() {
        return createTable(32);
    }

    onClick(event) {
        // console.log(event.target.getAttribute('class'));
        if (event.target.dataset.resize) {
            console.log('Resizing:', event.target.dataset);
        }
    }
}

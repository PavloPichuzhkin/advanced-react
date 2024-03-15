import { createTable } from './table.template';
import { ExcelComponent } from '../../core/ExcelComponent';
import { resizeHandler } from './table.resize';
import { shouldResize } from './table.functions';

export class Table extends ExcelComponent {
    static className = 'excel__table';

    constructor(
        $root,
        // : ReturnType<typeof $>
    ) {
        super($root, {
            name: 'Toolbar',
            listeners: ['mousedown'],
        });
    }

    toHTML() {
        return createTable(32);
    }

    onMousedown = (event) => {
        if (shouldResize(event)) {
            resizeHandler(this.$root, event);
        }
    };
}

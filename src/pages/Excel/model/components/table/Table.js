import { createTable } from './table.template';
import { ExcelComponent } from '../../core/ExcelComponent';
import { resizeHandler } from './table.resize';
import { isCell, matrix, nextSelector, shouldResize } from './table.functions';
import { TableSelection } from './TableSelection';
import { $ } from '../../core/dom';
import { ROWS_COUNT } from './table.consts';

export class Table extends ExcelComponent {
    static className = 'excel__table';

    constructor(
        $root,
        // : ReturnType<typeof $>
    ) {
        super($root, {
            name: 'Table',
            listeners: ['mousedown', 'click', 'keydown'],
        });
    }

    prepare() {
        // console.log('prepare');
        this.selection = new TableSelection();
    }

    init() {
        // console.log('init');
        super.init();

        const $cell = this.$root.findEl('[data-id="0:0"]');
        this.selection.select($cell);
    }

    toHTML() {
        return createTable(ROWS_COUNT);
    }

    onMousedown = (event) => {
        if (shouldResize(event)) {
            resizeHandler(this.$root, event);
        } else if (isCell(event)) {
            // console.log(event);
            const $target = $(event.target);
            if (event.ctrlKey) {
                this.selection.selectWithCtrl($target);
            } else if (event.shiftKey) {
                const $cells = matrix($target, this.selection.current).map(
                    (id) => this.$root.findEl(`[data-id="${id}"]`),
                );
                this.selection.selectGroup($cells, $target);
            } else {
                this.selection.select($target);
            }
        }
    };

    onClick = (event) => {
        const $el = $(event.target);

        const { id } = $el.data;
        console.log(id);
    };

    onKeydown(event) {
        const keys = [
            'Enter',
            'Tab',
            'ArrowLeft',
            'ArrowRight',
            'ArrowDown',
            'ArrowUp',
        ];

        const { key } = event;

        if (keys.includes(key) && !event.shiftKey) {
            event.preventDefault();
            const id = this.selection.current.id(true);
            const $next = this.$root.findEl(nextSelector(key, id));
            this.selection.select($next);
        }
    }
}

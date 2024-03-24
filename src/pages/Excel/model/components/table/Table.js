import { createTable } from './table.template';
import { ExcelComponent } from '../../core/ExcelComponent';
import { resizeHandler } from './table.resize';
import { isCell, matrix, nextSelector, shouldResize } from './table.functions';
import { TableSelection } from './TableSelection';
import { $ } from '../../core/dom';
import { ROWS_COUNT } from './table.consts';
import * as actions from '../../redux/actions';

export class Table extends ExcelComponent {
    static className = 'excel__table';

    constructor(
        $root,
        options,
        // : ReturnType<typeof $>
    ) {
        super($root, {
            name: 'Table',
            listeners: ['mousedown', 'click', 'keydown', 'input'],
            ...options,
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
        this.selection.select($cell); // //////////////////////
        this.$emit('table:select', $cell);

        this.$on('formula:input', (text) => {
            this.selection.current.text(text);
        });

        this.$on('formula:keydown', (event) => {
            this.selection.current.focus();
        });

        // this.$subscribe((state) => {
        //     console.log('TableState', state);
        // });
    }

    toHTML() {
        return createTable(ROWS_COUNT, this.store.getState());
    }

    selectCell($cell) {
        this.selection.select($cell);
        this.$emit('table:select', $cell);
    }

    async resizeTable(event) {
        try {
            const data = await resizeHandler(this.$root, event);
            console.log(data);
            this.$dispatch(
                data.type === 'col'
                    ? actions.tableColResize(data)
                    : actions.tableRowResize(data),
            );
        } catch (e) {
            console.warn('Resize error', e.message);
        }
    }

    onMousedown = (event) => {
        if (shouldResize(event)) {
            this.resizeTable(event);
        } else if (isCell(event)) {
            const $target = $(event.target);
            this.$emit('table:select', $target);
            if (event.ctrlKey) {
                this.selection.selectWithCtrl($target);
            } else if (event.shiftKey) {
                event.preventDefault();
                const $cells = matrix($target, this.selection.current).map(
                    (id) => this.$root.findEl(`[data-id="${id}"]`),
                );
                this.selection.selectGroup($cells, $target);
            } else {
                this.selection.select($target);
            }
        }
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
            this.$emit('table:select', $next);
        }
    }

    onInput(event) {
        this.$emit('table:input', $(event.target));
    }

    onClick = (event) => {
        const $el = $(event.target);

        const { id } = $el.data;
        // console.log(id);
    };
}

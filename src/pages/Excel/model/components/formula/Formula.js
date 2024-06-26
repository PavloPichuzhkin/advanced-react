import { ExcelComponent } from '../../core/ExcelComponent';
import { $ } from '../../core/dom';

export class Formula extends ExcelComponent {
    static className = 'excel__formula';

    constructor($root, options) {
        super($root, {
            name: 'Formula',
            listeners: ['input', 'click', 'keydown'],
            subscribe: ['currentText'],
            ...options,
        });
    }

    toHTML() {
        return `
      <div class="info">fx</div>
      <div id="formula" class="input" contenteditable spellcheck="false"></div>
    `;
    }

    init() {
        super.init();

        this.$formula = this.$root.findEl('#formula');
        this.$formula.focus();
        this.$on('table:select', ($cell) => {
            this.$formula.text($cell.data.value || '');
        });
    }

    storeChanged(state) {
        // console.log('Changes', state.currentText);
        this.$formula.text(state.currentText);
    }

    onInput(event) {
        this.$emit('formula:input', $(event.target).text());
    }

    onKeydown(event) {
        const keys = ['Enter', 'Tab'];
        if (keys.includes(event.key)) {
            event.preventDefault();
            this.$emit('formula:keydown', event);
        }
    }

    onClick() {
        // console.log(this.name, this.$root);
    }
}

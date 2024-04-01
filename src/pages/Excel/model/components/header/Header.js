import { t } from 'i18next';
import { ExcelComponent } from '../../core/ExcelComponent';
import { $ } from '../../core/dom';
import * as actions from '../../redux/actions';
import { debounce } from '../../core/utils';

export const defaultTitle = 'New table';

export class Header extends ExcelComponent {
    static className = 'excel__header';

    constructor($root, options) {
        super($root, {
            name: 'Header',
            listeners: ['input'],

            ...options,
        });
    }

    toHTML() {
        const title = t(this.store.getState().title || defaultTitle);

        return `
      <input type="text" class="input" value="${title}" />
      <div>
        <div class="button_red">
          <i class="material-icons">delete</i>
        </div>
        <div class="button">
          <i class="material-icons">exit_to_app</i>
        </div>
      </div>
    `;
    }

    prepare() {
        this.onInput = debounce(this.onInput, 500);
    }

    onInput(event) {
        const $target = $(event.target);
        console.log($target.$el, this.store.getState().title);
        this.$dispatch(actions.changeTitle($target.text()));
    }
}

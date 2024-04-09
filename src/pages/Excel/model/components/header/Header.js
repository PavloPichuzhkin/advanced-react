import { t } from 'i18next';
import { ExcelComponent } from '../../core/ExcelComponent';
import { $ } from '../../core/dom';
import * as actions from '../../redux/actions';
import { debounce } from '../../core/utils';
import { ActiveRoute } from '../../core/routes/ActiveRoute';

export const defaultTitle = 'New table';

export class Header extends ExcelComponent {
    static className = 'excel__header';

    constructor($root, options) {
        super($root, {
            name: 'Header',
            listeners: ['input', 'click'],

            ...options,
        });
    }

    toHTML() {
        const title = t(this.store.getState().title || defaultTitle);

        return `
      <input type="text" class="input" value="${title}" />
      <div>
        <div class="button_red" data-button="remove">
          <i class="material-icons" data-button="remove">delete</i>
        </div>
<!--        <a href="#hghg">-->
           <div class="button" data-button="exit">          
            <i class="material-icons" data-button="exit">exit_to_app</i>                   
          </div>
<!--        </a>-->
      </div>
    `;
    }

    // TODO check commented lines in prod version (createRecordsTable)
    prepare() {
        this.onInput = debounce(this.onInput, 500);
    }

    onInput(event) {
        const $target = $(event.target);
        console.log($target.$el, this.store.getState().title);
        this.$dispatch(actions.changeTitle($target.text()));
    }

    onClick(event) {
        const $target = $(event.target);

        if ($target.data.button === 'remove') {
            // eslint-disable-next-line no-restricted-globals
            const decision = confirm(
                t('Do you really want to delete this table?'),
            );

            if (decision) {
                localStorage.removeItem(`excel: ${ActiveRoute.param}`);
                ActiveRoute.navigate('');
            }
        } else if ($target.data.button === 'exit') {
            ActiveRoute.navigate('');
        }
    }
}

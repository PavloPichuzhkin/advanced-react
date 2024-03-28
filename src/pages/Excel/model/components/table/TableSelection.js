export class TableSelection {
    static className = 'selected';

    constructor() {
        this.group = [];
        this.current = null;
    }

    // $el instanceof DOM === true
    select($el) {
        this.clear();
        this.group.push($el);
        // https://stackoverflow.com/questions/511088/use-javascript-to-place-cursor-at-end-of-text-in-text-input-element
        $el.focus().addClass(TableSelection.className);

        this.current = $el;
    }

    clear() {
        this.group.forEach(($el) => $el.removeClass(TableSelection.className));
        this.group = [];
    }

    selectWithCtrl($el) {
        this.group.push($el);
        $el.addClass(TableSelection.className);
        this.current = $el;
    }

    selectGroup($group = [], $el = '') {
        this.clear();

        this.group = $group;
        this.group.forEach(($el) => $el.addClass(TableSelection.className));
        $el.focus();
        this.current = $el;
    }

    applyStyle(style) {
        this.group.forEach(($el) => $el.css(style));
    }

    get selectedIds() {
        return this.group.map(($el) => $el.id());
    }
}

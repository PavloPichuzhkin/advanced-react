class Dom {
    constructor(selector) {
        this.$el =
            typeof selector === 'string'
                ? document.querySelector(selector)
                : selector;
    }

    html(html) {
        if (typeof html === 'string') {
            this.$el.innerHTML = html;
            return this;
        }
        return this.$el.outerHTML.trim();
    }

    clear() {
        this.html('');
        return this;
    }

    on(eventType, callback) {
        this.$el.addEventListener(eventType, callback);
    }

    off(eventType, callback) {
        this.$el.removeEventListener(eventType, callback);
    }

    append(node) {
        if (node instanceof Dom) {
            node = node.$el;
        }

        if (Element.prototype.append) {
            this.$el.append(node);
        } else {
            this.$el.appendChild(node);
        }

        return this;
    }

    removeChildren() {
        this.$el.innerHTML = '';
        return this;
    }

    closest(selector) {
        // eslint-disable-next-line no-use-before-define
        return $(this.$el.closest(selector));
    }

    getCoords() {
        return this.$el.getBoundingClientRect();
    }

    get data() {
        return this.$el.dataset;
    }

    findAll(selector) {
        return this.$el.querySelectorAll(selector);
    }

    findEl(selector) {
        // eslint-disable-next-line no-use-before-define
        return $(this.$el.querySelector(selector));
    }

    addClass(className) {
        this.$el.classList.add(className);
        return this;
    }

    removeClass(className) {
        this.$el.classList.remove(className);
        return this;
    }

    css(styles = {}) {
        Object.keys(styles).forEach((key) => {
            this.$el.style[key] = styles[key];
        });
    }

    id(parse) {
        if (parse) {
            const parsed = this.id().split(':');
            return {
                row: +parsed[0],
                col: +parsed[1],
            };
        }
        return this.data.id;
    }

    focus() {
        this.$el.focus();
        return this;
    }

    text(text) {
        if (typeof text === 'string') {
            this.$el.textContent = text;
            return this;
        }
        if (this.$el.tagName.toLowerCase() === 'input') {
            return this.$el.value.trim();
        }
        return this.$el.textContent.trim();
    }
}

export function $(selector) {
    return new Dom(selector);
}

$.create = (tagName, classes = '') => {
    const el = document.createElement(tagName);
    if (classes) {
        el.classList.add(classes);
    }
    return $(el);
};

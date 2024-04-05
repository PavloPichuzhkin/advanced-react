export function capitalize(string) {
    if (typeof string !== 'string') {
        return '';
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function range(start, end) {
    if (start > end) {
        [end, start] = [start, end];
    }
    return new Array(end - start + 1).fill('').map((_, index) => start + index);
}

// eslint-disable-next-line consistent-return
export function storage(key, data) {
    // data=null
    if (!data) {
        return JSON.parse(localStorage.getItem(key));
    }
    localStorage.setItem(key, JSON.stringify(data));
}

export function isEqual(a, b) {
    if (typeof a === 'object' && typeof b === 'object') {
        return JSON.stringify(a) === JSON.stringify(b);
    }
    return a === b;
}

function isObject(object) {
    return object != null && typeof object === 'object';
}

export function deepObjectEqual(x, y) {
    const ok = Object.keys;
    const tx = typeof x;
    const ty = typeof y;
    return x && y && tx === 'object' && tx === ty
        ? ok(x).length === ok(y).length &&
              ok(x).every((key) => deepObjectEqual(x[key], y[key]))
        : x === y;
}

export function camelToDashCase(str) {
    return str.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`);
}

export function toInlineStyles(styles = {}) {
    return Object.keys(styles)
        .map((key) => `${camelToDashCase(key)}: ${styles[key]}`)
        .join(';');
}

export function debounce(fn, wait) {
    let timeout;
    return function (...args) {
        const later = () => {
            clearTimeout(timeout);
            // fn(...args);
            fn.apply(this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// export function throttle(fn, wait = 1000) {
//     let timeout;
//     let shouldThrottle = false;
//     return function (...args) {
//         if (!shouldThrottle) {
//             fn.apply(this, args);
//             shouldThrottle = true;
//             clearTimeout(timeout);
//
//             timeout = setTimeout(() => {
//                 shouldThrottle = false;
//             }, wait);
//         }
//     };
// }

export function throttle(fn, wait = 1000) {
    let timeout;
    let shouldThrottle;
    return (...args) => {
        if (shouldThrottle) return;
        shouldThrottle = true;
        timeout = setTimeout(() => {
            // fn(...args);
            fn.apply(this, args);

            shouldThrottle = false;
            clearTimeout(timeout);
        }, wait);
    };
}

export function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

export function preventDefault(event) {
    event.preventDefault();
}

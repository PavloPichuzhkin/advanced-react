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

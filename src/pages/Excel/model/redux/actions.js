import {
    APPLY_STYLE,
    CHANGE_STYLES,
    CHANGE_TEXT,
    CHANGE_TITLE,
    TABLE_RESIZE,
} from './types';

export function returnAction(type, data) {
    return { type, data };
}

// Action Creator
export function tableResize(data) {
    return returnAction(TABLE_RESIZE, data);
}

export function changeText(data) {
    return returnAction(CHANGE_TEXT, data);
}

export function changeStyles(data) {
    return returnAction(CHANGE_STYLES, data);
}

export function applyStyle(data) {
    return returnAction(APPLY_STYLE, data);
}

export function changeTitle(data) {
    return returnAction(CHANGE_TITLE, data);
}

import {
    APPLY_STYLE,
    CHANGE_STYLES,
    CHANGE_TEXT,
    CHANGE_TITLE,
    TABLE_RESIZE,
    UPDATE_OPENED_DATE,
} from './types';
import { deepObjectEqual } from '../core/utils';

function statePartValue(state, field, action) {
    const prevState = state[field] || {};
    prevState[action.data.id] = action.data.value;
    return prevState;
}

export function rootReducer(state, action) {
    let field;
    let statePart;

    switch (action.type) {
        case TABLE_RESIZE:
            field = action.data.type === 'col' ? 'colState' : 'rowState';

            return {
                ...state,
                [field]: statePartValue(state, field, action),
                editedDate: new Date().toJSON(),
            };

        case CHANGE_TEXT:
            field = 'dataState';
            return {
                ...state,
                currentText: action.data.value,
                [field]: statePartValue(state, field, action),
                editedDate: new Date().toJSON(),
            };
        case CHANGE_STYLES:
            return {
                ...state,
                currentStyles: action.data,
                editedDate: new Date().toJSON(),
            };

        case APPLY_STYLE:
            field = 'stylesState';
            statePart = state[field] || {};
            action.data.ids.forEach((id) => {
                statePart[id] = { ...statePart[id], ...action.data.value };
            });
            return {
                ...state,
                [field]: statePart,
                currentStyles: { ...state.currentStyles, ...action.data.value },
                editedDate: new Date().toJSON(),
            };
        case CHANGE_TITLE:
            return {
                ...state,
                title: action.data,
                editedDate: new Date().toJSON(),
            };
        case UPDATE_OPENED_DATE:
            return { ...state, openedDate: new Date().toJSON() };
        default:
            return state;
    }
}

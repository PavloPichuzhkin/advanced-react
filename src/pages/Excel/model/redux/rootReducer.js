import { APPLY_STYLE, CHANGE_STYLES, CHANGE_TEXT, TABLE_RESIZE } from './types';
import { deepObjectEqual } from '../core/utils';

function statePartValue(state, field, action) {
    const prevState = state[field] || {};
    prevState[action.data.id] = action.data.value;
    return prevState;
}

export function rootReducer(state, action) {
    let field;
    let statePart;

    function fn2(a, b) {
        return a + b;
    }

    console.log(action.data);
    switch (action.type) {
        case TABLE_RESIZE:
            field = action.data.type === 'col' ? 'colState' : 'rowState';

            console.log(
                deepObjectEqual(
                    {
                        ...state,
                        [field]: {
                            ...statePartValue(state, field, action),
                            some2: { some2: 2 },
                            fn: fn2,
                            // fn2(a, b) {
                            //     return a + b;
                            // },
                        },
                    },
                    {
                        ...state,
                        [field]: {
                            ...state[field],
                            [action.data.id]: action.data.value,
                            some2: { some2: 2 },
                            fn: fn2,
                            // fn2(a, b) {
                            //     return a + b;
                            // },
                        },
                    },
                ),
            );

            return { ...state, [field]: statePartValue(state, field, action) };

        case CHANGE_TEXT:
            field = 'dataState';
            return {
                ...state,
                currentText: action.data.value,
                [field]: statePartValue(state, field, action),
            };
        case CHANGE_STYLES:
            return { ...state, currentStyles: action.data };

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
            };
        default:
            return state;
    }
}

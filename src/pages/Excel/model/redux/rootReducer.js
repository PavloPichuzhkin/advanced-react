import { CHANGE_TEXT, TABLE_RESIZE } from './types';
import { deepObjectEqual } from '../core/utils';

export function rootReducer(state, action) {
    let prevState;
    let field;

    function fn2(a, b) {
        return a + b;
    }

    switch (action.type) {
        case TABLE_RESIZE:
            field = action.data.type === 'col' ? 'colState' : 'rowState';
            prevState = state[field] || {};
            prevState[action.data.id] = action.data.value;

            console.log(
                deepObjectEqual(
                    {
                        ...state,
                        [field]: {
                            ...prevState,
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

            return { ...state, [field]: prevState };

        case CHANGE_TEXT:
            prevState = state.dataState || {};
            prevState[action.data.id] = action.data.value;
            return {
                ...state,
                currentText: action.data.value,
                dataState: prevState,
            };
        default:
            return state;
    }
}

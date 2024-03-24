import { TABLE_COL_RESIZE, TABLE_ROW_RESIZE } from './types';
import { deepObjectEqual } from '../core/utils';

export function rootReducer(state, action) {
    let prevState;

    function fn2(a, b) {
        return a + b;
    }

    switch (action.type) {
        case TABLE_COL_RESIZE:
            prevState = state.colState || {};
            prevState[action.data.id] = action.data.value;

            console.log(
                deepObjectEqual(
                    {
                        ...state,
                        colState: {
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
                        colState: {
                            ...state.colState,
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
            return { ...state, colState: prevState }; // id, value

        case TABLE_ROW_RESIZE:
            prevState = state.rowState || {};
            prevState[action.data.id] = action.data.value;

            return { ...state, rowState: prevState };

        default:
            return state;
    }
}

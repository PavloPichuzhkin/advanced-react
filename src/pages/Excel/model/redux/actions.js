import { TABLE_COL_RESIZE, TABLE_ROW_RESIZE } from './types';

// Action Creator
export function tableColResize(data) {
    return {
        type: TABLE_COL_RESIZE,
        data,
    };
}

export function tableRowResize(data) {
    return {
        type: TABLE_ROW_RESIZE,
        data,
    };
}

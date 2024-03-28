import { storage } from '../core/utils';
import { defaultStyles } from '../components/table/table.consts';

const defaultState = {
    rowState: {},
    colState: {},
    dataState: {}, // {'0:1':'some text'}
    currentText: '',
    currentStyles: defaultStyles,
    stylesState: {},
};

const normalize = (state) => ({
    ...state,
    currentStyles: defaultStyles,
    currentText: '',
});

export const initialState = storage('excel-state')
    ? normalize(storage('excel-state'))
    : defaultState;

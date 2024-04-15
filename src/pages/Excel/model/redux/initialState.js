import { clone, storage } from '../core/utils';
import { defaultStyles } from '../components/table/table.consts';
import { defaultTitle } from '../components/header/Header';

const defaultState = {
    title: defaultTitle,
    rowState: {},
    colState: {},
    dataState: {}, // {'0:1':'some text'}
    currentText: '',
    currentStyles: defaultStyles,
    stylesState: {},
    createdDate: new Date().toJSON(),
    editedDate: new Date().toJSON(),
    openedDate: new Date().toJSON(),
};

const normalize = (state) => ({
    ...state,
    currentStyles: defaultStyles,
    currentText: '',
});

export function storageName(param) {
    return `excel: ${param}`;
}

export const normalizeInitialState = (state) => {
    // console.log(defaultState); // defaultState mutated from nowhere wt??????
    // check creteStore getState() (to return {... state} }

    return state ? normalize(state) : clone(defaultState);
    // return normalize(storage(storageName(param)) || clone(defaultState));
};

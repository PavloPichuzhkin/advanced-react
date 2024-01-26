import { AnyAction } from '@reduxjs/toolkit';

export const getGlobalDispatch = (action: AnyAction) => {
    // @ts-ignore
    window.globalDispatch(action);
    // window.reduxStore.dispatch(action);
};

// or use somehow redux method
// https://redux.js.org/faq/code-structure#how-can-i-use-the-redux-store-in-non-component-files

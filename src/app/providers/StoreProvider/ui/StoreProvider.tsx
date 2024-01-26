import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';
import { getGlobalDispatch } from '@/shared/lib/helpers/globalDispatch/globalDispatch';
// import { createReduxStore } from '@/app/providers/StoreProvider/config/store';
// import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState, asyncReducers } = props;

    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
    );

    if (__PROJECT__ === 'storybook') {
        // @ts-ignore
        window.globalDispatch = store.dispatch;
        // window.reduxStore = store;
    }
    return <Provider store={store}>{children}</Provider>;
};

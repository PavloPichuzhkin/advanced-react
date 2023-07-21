import { counterReducer } from 'widgets/Counter';
import { configureStore } from '@reduxjs/toolkit';

// import { counterReducer } from 'entities/Counter';
import { counterReducerEntity } from 'enteties/Counter';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer,
            counterEntity: counterReducerEntity,

        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}

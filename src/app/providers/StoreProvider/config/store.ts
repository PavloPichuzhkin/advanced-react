import { counterReducer } from 'widgets/Counter';
import { configureStore } from '@reduxjs/toolkit';
import { counterReducerEntity } from 'enteties/Counter';
import { userReducer } from 'enteties/User';
import { loginReducer } from 'features/AuthByUsername';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer,
            counterEntity: counterReducerEntity,
            user: userReducer,
            loginForm: loginReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof createReduxStore>['getState']
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

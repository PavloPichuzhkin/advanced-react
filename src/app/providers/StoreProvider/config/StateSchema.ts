import { CounterSchemaEntity } from 'enteties/Counter';
import { CounterSchema } from 'widgets/Counter';
import { UserSchema } from 'enteties/User';
import { LoginSchema } from 'features/AuthByUsername';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { Action } from 'redux';
import { ExtractStateExtensions, ExtractStoreExtensions } from '@reduxjs/toolkit/src/tsHelpers';

export interface StateSchema {
    counter: CounterSchema;
    counterEntity: CounterSchemaEntity;
    user: UserSchema;

    // Async reducers
    loginForm?: LoginSchema
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

// export interface ReduxStoreWithManager extends ToolkitStore<StateSchema> {
//     reducerManager: ReducerManager;
// }
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}
// export type EnhancedStore<
//     S = any,
//     A extends Action = AnyAction,
//     M extends Middlewares<S> = Middlewares<S>,
//     E extends Enhancers = Enhancers
// > = ToolkitStore<S & ExtractStateExtensions<E>, A, M> &
//     ExtractStoreExtensions<E>

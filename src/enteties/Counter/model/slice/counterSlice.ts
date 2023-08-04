import { createSlice } from '@reduxjs/toolkit';
import { CounterSchemaEntity } from '../types/counterSchemaEntity';

const initialState: CounterSchemaEntity = {
    valueEntity: 3,
};

export const counterSlice = createSlice({
    name: 'counterEntity',
    initialState,
    reducers: {
        increment: (state) => {
            state.valueEntity += 1;
        },
        decrement: (state) => {
            state.valueEntity -= 1;
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: counterActionscounterEntity } = counterSlice;
export const { reducer: counterReducerEntity } = counterSlice;

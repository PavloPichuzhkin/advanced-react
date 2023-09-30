import { PayloadAction } from '@reduxjs/toolkit';
import { CounterSchemaEntity } from '../types/counterSchemaEntity';
import { buildSlice } from '@/shared/lib/store';

const initialState: CounterSchemaEntity = {
    valueEntity: 3,
};

export const counterSlice = buildSlice({
    name: 'counterEntity',
    initialState,
    reducers: {
        increment: (state) => {
            state.valueEntity += 1;
        },
        decrement: (state) => {
            state.valueEntity -= 1;
        },
        add: (state, { payload }: PayloadAction<number>) => {
            state.valueEntity += payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    actions: counterActionscounterEntity,
    reducer: counterReducerEntity,
    useActions: useCounterEntityActions,
} = counterSlice;

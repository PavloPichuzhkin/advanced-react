import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GeneratedSlicedSchema } from '../types/generatedSlicedSchema';

const initialState: GeneratedSlicedSchema = {
    
};

export const generatedSlicedSlice = createSlice({
    name: 'generatedSliced',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => { 
           
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: generatedSlicedActions } = generatedSlicedSlice;
export const { reducer: generatedSlicedReducer } = generatedSlicedSlice;

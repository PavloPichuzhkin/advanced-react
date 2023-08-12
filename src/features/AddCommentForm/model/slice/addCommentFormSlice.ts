import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/addCommentForm';
import { addComment } from '../services/addComment';

const initialState: AddCommentFormSchema = {
    text: '',
};

export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
            if (state.error) {
                state.error = undefined;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addComment.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(addComment.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(addComment.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;

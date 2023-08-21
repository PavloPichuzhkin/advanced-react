import {
    createEntityAdapter,
    createSlice, PayloadAction,
} from '@reduxjs/toolkit';

import { Comment } from 'enteties/Comments';
import { StateSchema } from 'app/providers/StoreProvider';
import { addComment } from 'features/AddCommentForm';
import {
    fetchCommentsByArticleId,
} from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';

export const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
});

// export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
//     (state) => state.articleDetailsComments || commentsAdapter.getInitialState(),
// );

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (
                state,
                action: PayloadAction<Comment[]>,
            ) => {
                state.isLoading = false;
                commentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
        // .addCase(addComment.fulfilled, (
        //     state,
        //     action: PayloadAction<Comment>,
        // ) => {
        //     state.isLoading = false;
        //     commentsAdapter.addOne(state, action.payload);
        // });
    },
});

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
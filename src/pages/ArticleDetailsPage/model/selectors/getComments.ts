import { StateSchema } from 'app/providers/StoreProvider';
import { commentsAdapter } from '../slice/articleDetailsCommentsSlice';

export const getArticleCommentsIsLoading = (state: StateSchema) => state.articleDetailsPage?.comments.isLoading;
export const getArticleCommentsError = (state: StateSchema) => state.articleDetailsPage?.comments.error;
export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.comments || commentsAdapter.getInitialState(),
);

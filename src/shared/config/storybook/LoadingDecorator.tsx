import { StoryContext, StoryFn } from '@storybook/react';
import { StateSchema } from '@/app/providers/StoreProvider';
import { loginReducer } from '@/features/AuthByUsername/testing';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    articleDetailsReducer,
    fetchArticleById,
} from '@/entities/Article/testing';
import { profileReducer } from '@/features/EditableProfileCard/testing';
import { articlesPageReducer } from '@/pages/ArticlesPage/testing';
import { addCommentFormReducer } from '@/features/AddCommentForm/testing';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/testing';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    articlesPage: articlesPageReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
};
const loadingState: DeepPartial<StateSchema> = {
    loginForm: { isLoading: true },
    profile: { isLoading: true },
    articleDetails: { isLoading: true },
    articlesPage: { isLoading: true },
    addCommentForm: { isLoading: true },
    articleDetailsPage: {
        comments: { isLoading: true },
        recommendations: { isLoading: true },
    },
};
export const LoadingDecorator = (
    StoryComponent: StoryFn,
    context: StoryContext,
) => {
    const { title, name } = context;
    const dispatch = useAppDispatch();

    const includesLoading = (title + name).toLowerCase().includes('loading');

    if (includesLoading) {
        setTimeout(() => {
            // console.log(context);
            dispatch({ type: fetchArticleById.pending.type });
            return <StoryComponent />;
        }, 1500);
    }

    return <StoryComponent />;
};
// export const LoadingDecorator = (
//     StoryComponent: StoryFn,
//     context: StoryContext,
// ) => {
//     const { title, name } = context;
//     const dispatch = useAppDispatch();
//
//     const includesLoading = (title + name).toLowerCase().includes('loading');
//
//     if (includesLoading) {
//         setTimeout(() => {
//             // console.log(loadingState);
//             //     articleDetailsReducer(
//             //         { isLoading: false } as ArticleDetailsSchema,
//             //         {
//             //             type: fetchArticleById.pending.type,
//             //         },
//             //     )
//             dispatch({ type: fetchArticleById.pending.type });
//             return (
//                 <StoreProvider
//                     initialState={loadingState}
//                     asyncReducers={{ ...defaultAsyncReducers }}
//                 >
//                     <StoryComponent />
//                 </StoreProvider>
//             );
//         }, 1000);
//     }
//
//     return <StoryComponent />;
// };

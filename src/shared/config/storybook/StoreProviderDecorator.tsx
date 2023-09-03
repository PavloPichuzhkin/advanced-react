import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from 'enteties/Article/model/slice/articleDetailsSlice';
import { profileReducer } from 'features/EditableProfileCard/model/slice/profileSlice';
import { articlesPageReducer } from 'pages/ArticlesPage/model/slices/articlesPageSlice';

export const StoreProviderDecorator = (StoryComponent: StoryFn) => (
    <StoreProvider>
        <StoryComponent />
    </StoreProvider>
);

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    articlesPage: articlesPageReducer,
};

export const PartialStoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: StoryFn) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);

import type { Meta, StoryObj } from '@storybook/react';
import { PartialStoreDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { mockReturnArticlesPageState } from '@/shared/assets/tests/mockReturnArticlesPageState';
import { ArticleView } from '@/entities/Article';
import ArticlesPage from './ArticlesPage';

const meta: Meta<typeof ArticlesPage> = {
    title: 'Pages/ArticlesPage/ArticlesPage/Deprecated',
    component: ArticlesPage,
    // tags: ['autodocs'],
    decorators: [
        // InitUserDecorator(), // Assistant, PartialStoreDecorator rewrite
        PartialStoreDecorator({
            user: {
                authData: { jsonSettings: { isArticlesPageWasOpened: true } },
            },
        }),
    ],
};

export default meta;
type Story = StoryObj<typeof ArticlesPage>;

export const Primary: Story = {
    args: {},
    decorators: [
        PartialStoreDecorator({
            // articlesPage: mockReturnArticlesPageState({}),  //MSW push it
            user: {
                authData: { jsonSettings: { isArticlesPageWasOpened: true } },
            },
        }),
    ],
};

export const Loading: Story = {
    args: {},
    decorators: [
        PartialStoreDecorator({
            articlesPage: mockReturnArticlesPageState({ isLoading: true }),
            user: {
                authData: { jsonSettings: { isArticlesPageWasOpened: true } },
            },
        }),
    ],
};

export const ArticlesNotFound: Story = {};

export const Error: Story = {};

export const FirstOpen: Story = {
    args: {},
    decorators: [
        PartialStoreDecorator({
            user: {
                authData: {
                    jsonSettings: { isArticlesPageWasOpened: undefined },
                },
            },
        }),
    ],
};

export const BigView: Story = {
    args: {},
    decorators: [
        PartialStoreDecorator({
            articlesPage: mockReturnArticlesPageState({
                view: ArticleView.BIG,
            }),
            user: {
                authData: { jsonSettings: { isArticlesPageWasOpened: true } },
            },
        }),
    ],
};

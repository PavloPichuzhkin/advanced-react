import type { Meta, StoryObj } from '@storybook/react';
import { PartialStoreDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { mockReturnArticleDetailsCommentsState } from '@/shared/assets/tests/mockArticleDetailsComments';
import { article } from '@/shared/assets/tests/mockArticleData';
import { articleDetailsPageReducer } from '../../model/slice';
import ArticleDetailsPage from './ArticleDetailsPage';

const meta: Meta<typeof ArticleDetailsPage> = {
    title: 'Pages/ArticleDetailsPage/ArticleDetailsPage',
    component: ArticleDetailsPage,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPage>;

export const Primary: Story = {
    args: {},
    decorators: [
        PartialStoreDecorator(
            {
                articleDetails: {
                    data: article,
                },
                articleDetailsPage: {
                    comments: mockReturnArticleDetailsCommentsState(),
                },
            },
            { articleDetailsPage: articleDetailsPageReducer },
        ),
    ],
};

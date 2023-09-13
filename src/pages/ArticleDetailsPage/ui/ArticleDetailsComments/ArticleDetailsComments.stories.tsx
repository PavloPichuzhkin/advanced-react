import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { PartialStoreDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { mockReturnArticleDetailsCommentsState } from '@/shared/assets/tests/mockArticleDetailsComments';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsComments } from './ArticleDetailsComments';

const meta: Meta<typeof ArticleDetailsComments> = {
    title: 'Pages/ArticleDetailsPage/ArticleDetailsComments',
    component: ArticleDetailsComments,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsComments>;

export const Primary: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK),
        PartialStoreDecorator({
            articleDetailsPage: {
                comments: mockReturnArticleDetailsCommentsState(),
            },
        }, { articleDetailsPage: articleDetailsPageReducer }),
    ],
};

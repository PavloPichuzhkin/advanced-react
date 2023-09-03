import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/lib/context/ThemeContext';
import { PartialStoreDecorator } from 'shared/config/storybook/StoreProviderDecorator';
import { Article } from 'enteties/Article';
import { ArticleBlockType, ArticleType } from 'enteties/Article/model/types/article';
import { article } from 'enteties/Article/ui/ArticleDetails/ArticleDetails.stories';
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
        PartialStoreDecorator({
            articleDetails: {
                data: article,
            },
        })],
};

import type { Meta, StoryObj } from '@storybook/react';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';
import { PartialStoreDecorator } from '@/shared/config/storybook/StoreProviderDecorator';

const meta: Meta<typeof ArticleDetailsPageHeader> = {
    title: 'Pages/ArticleDetailsPage/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPageHeader>;

export const Primary: Story = {};

// export const PrimaryRedesigned: Story = {}; // ArticleDetailsPageHeader used only in old design

export const UserCanEditArticle: Story = {
    decorators: [
        PartialStoreDecorator({
            articleDetails: { data: { user: { id: 'some' } } },
            user: {
                authData: {
                    id: 'some',
                },
            },
        }),
    ],
};

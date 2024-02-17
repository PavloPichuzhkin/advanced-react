import type { Meta, StoryObj } from '@storybook/react';
import { ArticleAdditionalInfo } from './ArticleAdditionalInfo';
import AddStylesDecorator from '@/shared/config/storybook/AddStylesDecorator';
import { mockArticleData } from '@/entities/Article/testing';

const meta: Meta<typeof ArticleAdditionalInfo> = {
    title: 'Widgets/ArticleAdditionalInfo/Redesigned',
    // title: 'Widgets/ArticleAdditionalInfo', // need DesignSwitcherDecorator

    component: ArticleAdditionalInfo,
    // tags: ['autodocs'],
    decorators: [
        AddStylesDecorator({
            margin: '0 4rem',
            padding: '2rem 2rem',
            border: '1px solid var(--accent-redesigned)',
            width: 'max-content',
            // background: 'var(--bg-redesigned)',
        }),
        AddStylesDecorator({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '400px',
            background: 'var(--bg-redesigned)',
        }),
    ],
};

export default meta;
type Story = StoryObj<typeof ArticleAdditionalInfo>;

export const Primary: Story = {
    args: {
        article: mockArticleData,
        canEdit: false,
    },
};
export const CanEdit: Story = {
    args: {
        article: {
            ...mockArticleData,
            user: { ...mockArticleData.user, avatar: '' },
        },
        canEdit: true,
    },
};
export const Loading: Story = {
    args: {
        isLoading: true,
    },
};

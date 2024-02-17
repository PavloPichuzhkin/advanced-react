import type { Meta, StoryObj } from '@storybook/react';
import { ArticlesFilters } from './ArticlesFilters';
import AddStylesDecorator from '@/shared/config/storybook/AddStylesDecorator';
import { ArticleSortField, ArticleType } from '@/entities/Article';

const meta: Meta<typeof ArticlesFilters> = {
    title: 'Widgets/ArticlesFilters/Redesigned',
    component: ArticlesFilters,
    // tags: ['autodocs'],
    decorators: [
        AddStylesDecorator({
            margin: '0 4rem',
            padding: '2rem 2rem',
            border: '1px solid var(--accent-redesigned)',
            width: 'max-content',
        }),
        AddStylesDecorator({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '600px',
            background: 'var(--bg-redesigned)',
        }),
    ],
};

export default meta;
type Story = StoryObj<typeof ArticlesFilters>;

export const Primary: Story = {
    args: {
        type: ArticleType.IT,
        sort: ArticleSortField.TITLE,
        order: 'desc',
    },
};

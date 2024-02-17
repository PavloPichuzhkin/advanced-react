import type { Meta, StoryObj } from '@storybook/react';
import { ArticleTypeTabs } from './ArticleTypeTabs';
import { ArticleType } from '@/entities/Article';
import AddStylesDecorator from '@/shared/config/storybook/AddStylesDecorator';

const meta: Meta<typeof ArticleTypeTabs> = {
    title: 'Features/ArticleTypeTabs/Redesigned',
    component: ArticleTypeTabs,
    // tags: ['autodocs'],
    decorators: [AddStylesDecorator({ padding: '2rem 2rem' })],
};

export default meta;
type Story = StoryObj<typeof ArticleTypeTabs>;

export const Primary: Story = {
    args: { value: ArticleType.IT },
};

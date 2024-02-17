import type { Meta, StoryObj } from '@storybook/react';
import { ArticleTypeTabs } from './ArticleTypeTabs';
import { ArticleType } from '@/entities/Article';

const meta: Meta<typeof ArticleTypeTabs> = {
    title: 'Features/ArticleTypeTabs/Deprecated',
    component: ArticleTypeTabs,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleTypeTabs>;

export const Primary: Story = {
    args: { value: ArticleType.IT },
};

import type { Meta, StoryObj } from '@storybook/react';
import { ArticleViewSelector } from './ArticleViewSelector';
import { ArticleView } from '@/entities/Article';

const meta: Meta<typeof ArticleViewSelector> = {
    title: 'Features/ArticleViewSelector/Deprecated',
    component: ArticleViewSelector,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleViewSelector>;

export const Primary: Story = {
    args: { view: ArticleView.SMALL },
};

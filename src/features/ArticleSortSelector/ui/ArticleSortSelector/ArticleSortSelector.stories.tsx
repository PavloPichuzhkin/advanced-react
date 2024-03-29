import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { ArticleSortSelector } from './ArticleSortSelector';

const meta: Meta<typeof ArticleSortSelector> = {
    title: 'Features/ArticleSortSelector/Deprecated',
    component: ArticleSortSelector,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleSortSelector>;

export const Primary: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};

import type { Meta, StoryObj } from '@storybook/react';
import { CreateArticleButton } from './CreateArticleButton';

const meta: Meta<typeof CreateArticleButton> = {
    title: 'Features/CreateArticleButton/Deprecated',
    component: CreateArticleButton,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CreateArticleButton>;

export const Primary: Story = {};
export const Button: Story = { args: { isButton: true } };

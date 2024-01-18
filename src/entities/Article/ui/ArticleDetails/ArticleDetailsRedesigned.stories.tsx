import type { Meta, StoryObj } from '@storybook/react';
import { ArticleDetails } from './ArticleDetails';

const meta: Meta<typeof ArticleDetails> = {
    title: 'Entities/Article/ArticleDetails/Redesigned',
    component: ArticleDetails,
    // tags: ['autodocs'],
    args: { id: '1' },
    parameters: {
        loki: {
            captureDelay: 5000,
        },
    },
};

export default meta;
type Story = StoryObj<typeof ArticleDetails>;

export const Primary: Story = {};

export const Loading: Story = {};

export const Error: Story = {};

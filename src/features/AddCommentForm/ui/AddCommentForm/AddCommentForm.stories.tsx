import type { Meta, StoryObj } from '@storybook/react';
import AddCommentForm from './AddCommentForm';
import { PartialStoreDecorator } from '@/shared/config/storybook/StoreProviderDecorator';

const meta: Meta<typeof AddCommentForm> = {
    title: 'Features/AddCommentForm/Deprecated',
    component: AddCommentForm,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const Primary: Story = {};

export const CommentIsSending: Story = {
    decorators: [
        PartialStoreDecorator({
            addCommentForm: { isLoading: true },
        }),
    ],
};

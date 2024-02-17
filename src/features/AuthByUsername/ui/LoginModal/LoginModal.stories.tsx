import type { Meta, StoryObj } from '@storybook/react';
import { PartialStoreDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { LoginModal } from './LoginModal';

const meta: Meta<typeof LoginModal> = {
    title: 'Features/AuthByUsername/LoginModal/Deprecated',
    component: LoginModal,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoginModal>;

export const Primary: Story = {
    args: {
        isOpen: true,
    },
    decorators: [
        PartialStoreDecorator({
            loginForm: { username: '123', password: 'asd' },
        }),
    ],
};

export const DarkWithError: Story = {
    args: {
        isOpen: true,
    },
    decorators: [
        PartialStoreDecorator({
            loginForm: { username: '123', password: 'asd', error: 'ERROR' },
        }),
    ],
};

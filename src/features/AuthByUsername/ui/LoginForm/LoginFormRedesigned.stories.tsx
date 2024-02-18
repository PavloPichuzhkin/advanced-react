import type { Meta, StoryObj } from '@storybook/react';
import { PartialStoreDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/AuthByUsername/LoginForm/Redesigned',
    component: LoginForm,
    // tags: ['autodocs'],
    parameters: {
        loki: {
            captureDelay: 5000,
        },
    },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {};
Primary.decorators = [
    PartialStoreDecorator({
        loginForm: { username: '123', password: 'asd' },
    }),
];

export const withError: Story = {};
withError.decorators = [
    PartialStoreDecorator({
        loginForm: { username: '123', password: 'asd', error: 'ERROR' },
    }),
];

export const Loading: Story = {};
Loading.decorators = [
    PartialStoreDecorator({
        loginForm: { isLoading: true },
    }),
];

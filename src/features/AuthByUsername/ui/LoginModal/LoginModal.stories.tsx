import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/lib/context/ThemeContext';
import { PartialStoreDecorator } from 'shared/config/storybook/StoreProviderDecorator';
import { LoginModal } from './LoginModal';

const meta: Meta<typeof LoginModal> = {
    title: 'features/AuthByUsername/LoginModal',
    component: LoginModal,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoginModal>;

export const Primary: Story = {
    args: {
        isOpen: true,
    },
};
Primary.decorators = [
    PartialStoreDecorator({
        loginForm: { username: '123', password: 'asd' },
    }),
];

export const Dark: Story = {
    args: {
        isOpen: true,
    },
};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    PartialStoreDecorator({
        loginForm: { username: '123', password: 'asd', error: 'ERROR' },
    }),
];

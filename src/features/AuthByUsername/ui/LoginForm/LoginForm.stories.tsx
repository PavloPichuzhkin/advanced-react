import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/lib/context/ThemeContext';
import { PartialStoreDecorator } from 'shared/config/storybook/StoreProviderDecorator';
import { loginReducer } from '../../model/slice/loginSlice';
import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/AuthByUsername/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
    args: {
    },
};
Primary.decorators = [PartialStoreDecorator({
    loginForm: { username: '123', password: 'asd' },
})];

export const Dark: Story = {
    args: {
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK), PartialStoreDecorator({
    loginForm: { username: '123', password: 'asd' },
}, { loginForm: loginReducer })];

export const withError: Story = {
    args: {
    },
};
withError.args = {};
withError.decorators = [PartialStoreDecorator({
    loginForm: { username: '123', password: 'asd', error: 'ERROR' },
})];

export const Loading: Story = {
    args: {
    },
};
Loading.args = {};
Loading.decorators = [PartialStoreDecorator({
    loginForm: { isLoading: true },
})];

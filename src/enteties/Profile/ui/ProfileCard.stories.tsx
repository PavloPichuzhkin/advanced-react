import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/lib/context/ThemeContext';
import { Currency } from 'enteties/CurrencySelect';
import { Country } from 'enteties/CountrySelect';
import avatar from 'shared/assets/tests/storybook.jpg';
import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
    title: 'Enteties/ProfileCard',
    component: ProfileCard,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
    args: {
        data: {
            first: 'Pavlo',
            lastname: 'Pichuzhkin',
            age: 222,
            currency: Currency.UAH,
            country: Country.NETHERLANDS,
            city: 'Kiev',
            username: 'admin',
            avatar: 'https://images.unsplash.com/photo-1573547429441-d7ef62e04b63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=80',
        },
    },
};
export const PrimaryReadonly: Story = {
    args: {
        data: {
            first: 'Pavlo',
            lastname: 'Pichuzhkin',
            age: 222,
            currency: Currency.UAH,
            country: Country.NETHERLANDS,
            city: 'Kiev',
            username: 'admin',
            // avatar: 'https://images.unsplash.com/photo-1573547429441-d7ef62e04b63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=80',
            avatar,
        },
        readonly: true,
    },
};
export const WithError: Story = {
    args: { error: 'error' },
};
// WithError.decorators = [ThemeDecorator(Theme.DARK)];
export const Loading: Story = {
    args: { isLoading: true },
};

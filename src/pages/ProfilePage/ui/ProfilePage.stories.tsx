import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/lib/context/ThemeContext';
import { PartialStoreDecorator } from 'shared/config/storybook/StoreProviderDecorator';
import { Currency } from 'enteties/CurrencySelect';
import { Country } from 'enteties/CountrySelect';
import avatar from 'shared/assets/tests/storybook.jpg';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
    title: 'Pages/ProfilePage',
    component: ProfilePage,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
    args: { },
    decorators: [PartialStoreDecorator({
        profile: {
            form: {
                first: 'Pavlo',
                lastname: 'Pichuzhkin',
                age: 222,
                currency: Currency.UAH,
                country: Country.NETHERLANDS,
                city: 'Kiev',
                username: 'admin',
                avatar,
            },
            readonly: true,
        },
    })],
};

export const Dark: Story = {
    args: { },
};
Dark.decorators = [ThemeDecorator(Theme.DARK),
    PartialStoreDecorator({
        profile: {
            form: {
                first: 'Pavlo',
                lastname: 'Pichuzhkin',
                age: 222,
                currency: Currency.UAH,
                country: Country.NETHERLANDS,
                city: 'Kiev',
                username: 'admin',
                avatar,
            },
            readonly: undefined,
        },
    })];

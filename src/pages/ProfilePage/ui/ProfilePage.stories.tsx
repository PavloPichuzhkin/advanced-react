import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/lib/context/ThemeContext';
import { PartialStoreDecorator } from 'shared/config/storybook/StoreProviderDecorator';
import { Currency } from 'enteties/CurrencySelect';
import { Country } from 'enteties/CountrySelect';
import avatar from 'shared/assets/tests/storybook.jpg';
import { mockProfileData } from 'shared/assets/tests/mockProfileData';
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
            form: mockProfileData,
            data: mockProfileData,
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
            form: mockProfileData,
            data: mockProfileData,
            readonly: undefined,
        },
    })];

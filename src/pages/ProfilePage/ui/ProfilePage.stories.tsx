import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/lib/context/ThemeContext';
import { PartialStoreDecorator } from 'shared/config/storybook/StoreProviderDecorator';
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
    decorators: [PartialStoreDecorator({})],
};

export const Dark: Story = {
    args: { },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

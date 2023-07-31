import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/lib/context/ThemeContext';
import { CountrySelect } from './CountrySelect';

const meta: Meta<typeof CountrySelect> = {
    title: 'Enteties/CountrySelect',
    component: CountrySelect,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CountrySelect>;

export const Primary: Story = {
    args: { },
};
export const Dark: Story = {
    args: { },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

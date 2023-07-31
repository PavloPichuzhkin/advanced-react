import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/lib/context/ThemeContext';
import { CurrencySelect } from './CurrencySelect';

const meta: Meta<typeof CurrencySelect> = {
    title: 'Enteties/CurrencySelect',
    component: CurrencySelect,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CurrencySelect>;

export const Primary: Story = {
    args: { },
};
export const Dark: Story = {
    args: { },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

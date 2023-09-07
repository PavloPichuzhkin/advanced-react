import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/lib/context/ThemeContext';
import { StoryFn } from '@storybook/react';
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
Primary.decorators = [
    (Story: StoryFn) => (
        <div style={{ padding: '8rem' }}><Story /></div>
    ),
];
export const Dark: Story = {
    args: { },
};
Dark.decorators = [ThemeDecorator(Theme.DARK),
    (Story: StoryFn) => (
        <div style={{ padding: '8rem' }}><Story /></div>
    ),
];

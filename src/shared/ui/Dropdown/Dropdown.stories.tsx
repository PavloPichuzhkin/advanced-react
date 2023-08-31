import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/lib/context/ThemeContext';
import { PartialStoreDecorator } from 'shared/config/storybook/StoreProviderDecorator';
import { StoryFn } from '@storybook/react';
import { Button } from '../Button';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
    title: 'shared/Dropdown',
    component: Dropdown,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Primary: Story = {
    args: {
        trigger: <Button as="div">Value</Button>,
        items: [
            { content: 'Some content 1' },
            { content: 'Some content 2' },
            { content: 'Some content 3' },
        ],
    },
    decorators: [
        (Story: StoryFn) => (
            <div style={{ padding: '5rem' }}><Story /></div>
        )],
};
export const Dark: Story = {
    args: {
        trigger: <Button as="div">Value</Button>,
        items: [
            { content: 'Some content 1' },
            { content: 'Some content 2' },
            { content: 'Some content 3' },
        ],
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
        (Story: StoryFn) => (
            <div style={{ padding: '5rem' }}><Story /></div>
        )],
};

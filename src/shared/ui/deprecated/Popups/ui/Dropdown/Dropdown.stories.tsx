import type { Meta, StoryObj } from '@storybook/react';
import { StoryFn } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { Button } from '../../../Button';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
    title: 'Shared/Popups/Dropdown',
    component: Dropdown,
    // tags: ['autodocs'],
    decorators: [],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Primary: Story = {
    args: {
        trigger: <Button as='div'>Value</Button>,
        items: [
            { content: 'Some content 1' },
            { content: 'Some content 2' },
            { content: 'Some content 3' },
        ],
    },
};
Primary.decorators = [
    (Story: StoryFn) => (
        <div style={{ padding: '9rem' }}>
            <Story />
        </div>
    ),
    ThemeDecorator(Theme.LIGHT),
];

export const Dark: Story = {
    args: {
        trigger: <Button as='div'>Value</Button>,
        items: [
            { content: 'Some content 1' },
            { content: 'Some content 2' },
            { content: 'Some content 3' },
        ],
    },
};
Dark.decorators = [
    (Story: StoryFn) => (
        <div style={{ padding: '9rem' }}>
            <Story />
        </div>
    ),
    ThemeDecorator(Theme.DARK),
];

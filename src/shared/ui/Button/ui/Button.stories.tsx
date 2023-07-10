import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/lib/context/ThemeContext';
import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
    title: 'Shared/Button',
    component: Button,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
        children: 'Text',
    },
};

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
    },
};

export const Outline: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    },
};

export const OutlineDark: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    },
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

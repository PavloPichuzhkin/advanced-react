import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'Shared/Redesigned/Button',
    component: Button,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Outline: Story = {
    args: {
        children: 'Text',
        variant: 'outline',
    },
};

export const Square: Story = {
    args: {
        children: '>',
        variant: 'outline',
        square: true,
    },
};

export const Clear: Story = {
    args: {
        children: 'Text',
        variant: 'clear',
    },
};

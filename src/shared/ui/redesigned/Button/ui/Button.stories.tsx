import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'Shared/Redesigned/Button',
    component: Button,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Text',
    },
};

export const Clear: Story = {
    args: {
        children: 'Text',
        variant: 'clear',
    },
};

export const Outline: Story = {
    args: {
        children: 'Text',
        variant: 'outline',
    },
};

export const OutlineSizeL: Story = {
    args: {
        children: 'Text',
        variant: 'outline',
        size: 'l',
    },
};

export const OutlineSizeXL: Story = {
    args: {
        children: 'Text',
        variant: 'outline',
        size: 'xl',
    },
};

export const Square: Story = {
    args: {
        children: '>',
        variant: 'outline',
        square: true,
    },
};

export const SquareSiseL: Story = {
    args: {
        children: '>',
        variant: 'outline',
        square: true,
        size: 'l',
    },
};
export const SquareSiseXL: Story = {
    args: {
        children: '>',
        variant: 'outline',
        square: true,
        size: 'xl',
    },
};

import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { Skeleton } from './Skeleton';
import { RedesignDecorator } from '@/shared/config/storybook/RedesignDecorator';

const meta: Meta<typeof Skeleton> = {
    title: 'Shared/Redesigned/Skeleton',
    component: Skeleton,
    // tags: ['autodocs'],
    decorators: [RedesignDecorator, ThemeDecorator(Theme.LIGHT)],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Primary: Story = {
    args: {
        border: '5px',
        width: '100%',
        height: 200,
    },
};

export const Circle: Story = {
    args: {
        border: '50%',
        width: 150,
        height: 150,
    },
};

import type { Meta, StoryObj } from '@storybook/react';
import { ThemeSwitcher } from './ThemeSwitcher';
import AddStylesDecorator from '@/shared/config/storybook/AddStylesDecorator';

const meta: Meta<typeof ThemeSwitcher> = {
    title: 'Features/ThemeSwitcher/Deprecated',
    component: ThemeSwitcher,
    // tags: ['autodocs'],
    decorators: [
        AddStylesDecorator({
            background: 'var(--inverted-bg-color)',
        }),
    ],
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
};

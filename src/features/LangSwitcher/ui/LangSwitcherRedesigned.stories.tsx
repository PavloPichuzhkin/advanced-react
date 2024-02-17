import type { Meta, StoryObj } from '@storybook/react';
import { LangSwitcher } from './LangSwitcher';

const meta: Meta<typeof LangSwitcher> = {
    title: 'Features/LangSwitcher/Redesigned',
    component: LangSwitcher,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LangSwitcher>;

export const Light: Story = {};

export const Short: Story = {
    args: { short: true },
};

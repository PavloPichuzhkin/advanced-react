import type { Meta, StoryObj } from '@storybook/react';
import { AppLink } from './AppLink';
import { RedesignDecorator } from '@/shared/config/storybook/RedesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';

const meta: Meta<typeof AppLink> = {
    title: 'Shared/Redesigned/AppLink',
    component: AppLink,
    // tags: ['autodocs'],
    args: { to: '/' },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        children: 'Link',
    },
};
Primary.decorators = [RedesignDecorator, ThemeDecorator(Theme.LIGHT)];

export const Red: Story = {
    args: {
        children: 'Link',
        variant: 'red',
    },
};
Red.decorators = [RedesignDecorator, ThemeDecorator(Theme.LIGHT)];

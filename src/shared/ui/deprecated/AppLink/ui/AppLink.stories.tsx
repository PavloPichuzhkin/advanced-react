import type { Meta, StoryObj } from '@storybook/react';

import { withStoryOrGlobalTheme } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'Shared/AppLink',
    component: AppLink,
    // tags: ['autodocs'],
    // args: { to: '/' },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        children: 'Link',
        theme: AppLinkTheme.PRIMARY,
    },
};
Primary.decorators = [withStoryOrGlobalTheme(Theme.LIGHT)];

export const Secondary: Story = {
    args: {
        children: 'Link',
        theme: AppLinkTheme.SECONDARY,
    },
};
Secondary.decorators = [withStoryOrGlobalTheme(Theme.LIGHT)];

export const Red: Story = {
    args: {
        children: 'Link',
        theme: AppLinkTheme.RED,
    },
};
Red.decorators = [withStoryOrGlobalTheme(Theme.LIGHT)];

export const PrimaryDark: Story = {
    args: {
        children: 'Link',
        theme: AppLinkTheme.PRIMARY,
    },
};
PrimaryDark.decorators = [withStoryOrGlobalTheme(Theme.DARK)];

export const SecondaryDark: Story = {
    args: {
        children: 'Link',
        theme: AppLinkTheme.SECONDARY,
    },
};
SecondaryDark.decorators = [withStoryOrGlobalTheme(Theme.DARK)];

export const RedDark: Story = {
    args: {
        children: 'Link',
        theme: AppLinkTheme.RED,
    },
};
RedDark.decorators = [withStoryOrGlobalTheme(Theme.DARK)];

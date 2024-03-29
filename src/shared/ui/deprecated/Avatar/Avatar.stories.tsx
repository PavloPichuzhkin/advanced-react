import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImg from '../../../assets/tests/storybook.jpg';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';

const meta: Meta<typeof Avatar> = {
    title: 'Shared/Deprecated/Avatar',
    component: Avatar,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
    args: {
        size: 150,
        src: AvatarImg,
    },
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Small: Story = {
    args: {
        size: 100,
        src: AvatarImg,
    },
};
Small.decorators = [ThemeDecorator(Theme.LIGHT)];

import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImg from '../../../assets/tests/storybook.jpg';
import { RedesignDecorator } from '@/shared/config/storybook/RedesignDecorator';
import { withStoryOrGlobalTheme } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';

const meta: Meta<typeof Avatar> = {
    title: 'Shared/Redesigned/Avatar',
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
Primary.decorators = [RedesignDecorator, withStoryOrGlobalTheme(Theme.LIGHT)];

import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImg from '../../assets/tests/storybook.jpg';

const meta: Meta<typeof Avatar> = {
    title: 'Shared/Avatar',
    component: Avatar,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
    args: {
        size: 150,
        src: AvatarImg,
    },
};
export const Small: Story = {
    args: {
        size: 100,
        src: AvatarImg,
    },
};

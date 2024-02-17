import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { AppImage } from './AppImage';
import AvatarImg from '../../../assets/tests/storybook.jpg';
import { RedesignDecorator } from '@/shared/config/storybook/RedesignDecorator';

const meta: Meta<typeof AppImage> = {
    title: 'Shared/Redesigned/AppImage',
    component: AppImage,
    // tags: ['autodocs'],
    args: {},
};

export default meta;
type Story = StoryObj<typeof AppImage>;

export const Primary: Story = {
    args: {
        src: AvatarImg,
        style: {
            width: 300,
            height: 300,
        },
    },
};
Primary.decorators = [RedesignDecorator, ThemeDecorator(Theme.LIGHT)];
export const ErrorImageFallback: Story = {
    args: {
        // src: AvatarImg,
        style: {
            width: 300,
            height: 300,
        },
    },
};

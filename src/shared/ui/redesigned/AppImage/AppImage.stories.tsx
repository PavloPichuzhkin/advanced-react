import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { PartialStoreDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { AppImage } from './AppImage';
import AvatarImg from '../../../assets/tests/storybook.jpg';

const meta: Meta<typeof AppImage> = {
    title: 'Shared/Redesigned/AppImage',
    component: AppImage,
    // tags: ['autodocs'],
    args: {
        src: AvatarImg,
    },
};

export default meta;
type Story = StoryObj<typeof AppImage>;

export const Primary: Story = {
    args: {
        style: {
            width: 300,
            height: 300,
        },
    },
};

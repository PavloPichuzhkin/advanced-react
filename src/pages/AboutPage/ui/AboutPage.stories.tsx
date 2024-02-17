import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import AboutPage from './AboutPage';

const meta: Meta<typeof AboutPage> = {
    title: 'Pages/AboutPage/Deprecated',
    component: AboutPage,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Light: Story = {
    args: {},
};

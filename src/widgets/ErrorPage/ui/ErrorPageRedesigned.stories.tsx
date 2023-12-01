import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { ErrorPage } from './ErrorPage';
import { RedesignDecorator } from '@/shared/config/storybook/RedesignDecorator';

const metaRedesigned: Meta<typeof ErrorPage> = {
    title: 'widgets/ErrorPage/Redesigned',
    component: ErrorPage,
    tags: ['autodocs'],
};
export default metaRedesigned;

type Story = StoryObj<typeof ErrorPage>;

export const Redesigned: Story = {
    args: {},
    decorators: [RedesignDecorator, ThemeDecorator(Theme.LIGHT)],
};

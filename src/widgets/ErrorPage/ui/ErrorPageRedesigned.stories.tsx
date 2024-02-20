import type { Meta, StoryObj } from '@storybook/react';
import ErrorPage from './ErrorPage';

const metaRedesigned: Meta<typeof ErrorPage> = {
    title: 'Widgets/ErrorPage/Redesigned',
    component: ErrorPage,
    // tags: ['autodocs'],
};
export default metaRedesigned;

type Story = StoryObj<typeof ErrorPage>;

export const Redesigned: Story = {
    args: {},
    // decorators: [RedesignDecorator, ThemeDecorator(Theme.LIGHT)],
};

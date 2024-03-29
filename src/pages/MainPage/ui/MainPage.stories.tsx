import type { Meta, StoryObj } from '@storybook/react';
import MainPage from './MainPage';

const meta: Meta<typeof MainPage> = {
    title: 'Pages/MainPage',
    component: MainPage,
    // tags: ['autodocs'],
    parameters: {
        loki: {
            captureDelay: 2000, // strange FAIL gitActions
        },
    },
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Light: Story = {
    args: {},
};

export const LightRedesigned: Story = {
    args: {},
};

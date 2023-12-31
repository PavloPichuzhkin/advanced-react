import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { Page } from './Page';

const meta: Meta<typeof Page> = {
    title: 'Widgets/Page',
    component: Page,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Page>;

export const Primary: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        // PartialStoreDecorator({
        //     profile: {
        //         form: {
        //             first: 'Pavlo',
        //         },
        //     },
        // })
    ],
};

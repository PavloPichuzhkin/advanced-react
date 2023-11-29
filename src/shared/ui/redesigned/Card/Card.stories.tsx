import type { Meta, StoryObj } from '@storybook/react';
import {
    withThemeProvider,
    ThemeDecorator,
} from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { AppText } from '../Text';
import { Card } from './Card';
import { RedesignDecorator } from '@/shared/config/storybook/RedesignDecorator';

const meta: Meta<typeof Card> = {
    title: 'Shared/Redesigned/Card',
    component: Card,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
    args: {
        children: <AppText title='title title' text='text text' />,
    },
};
// Primary.decorators = [RedesignDecorator, withThemeProvider];
Primary.decorators = [ThemeDecorator(), RedesignDecorator];

// export const Dark: Story = {
//     args: {
//         children: <AppText title='title title' text='text text' />,
//     },
//     decorators: [ThemeDecorator(Theme.DARK)],
// };
// export const Danger: Story = {
//     args: {
//         children: <AppText title='title title' text='text text' />,
//     },
//     decorators: [ThemeDecorator(Theme.DANGER)],
// };

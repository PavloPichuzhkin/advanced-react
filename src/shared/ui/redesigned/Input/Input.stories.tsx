import type { Meta, StoryObj } from '@storybook/react';
import {
    ThemeDecorator,
    withStoryOrGlobalTheme,
} from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { Input } from './Input';
import { RedesignDecorator } from '@/shared/config/storybook/RedesignDecorator';

const meta: Meta<typeof Input> = {
    title: 'Shared/Redesigned/Input',
    component: Input,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
    args: {
        placeholder: 'Text',
        value: '1212121212',
        autofocus: true,
    },
};
Primary.decorators = [RedesignDecorator, withStoryOrGlobalTheme(Theme.LIGHT)];

// export const Dark: Story = {
//     args: {
//         placeholder: 'Text',
//         value: '121212',
//         autofocus: true,
//     },
// };
// Dark.decorators = [ThemeDecorator(Theme.DARK)];

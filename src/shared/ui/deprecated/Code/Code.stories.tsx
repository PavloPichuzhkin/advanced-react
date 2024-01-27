import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { Code } from './Code';
import { codeExample } from '../../redesigned/Code/testing';
// import { codeExample } from '@/shared/ui/redesigned/Code/testing';
// import { codeExample } from '../../redesigned/Code/mockCodeExample';

const meta: Meta<typeof Code> = {
    title: 'Shared/Deprecated/Code',
    component: Code,
    // tags: ['autodocs'],
    args: {
        text: codeExample,
    },
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Primary: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Danger: Story = {
    decorators: [ThemeDecorator(Theme.DANGER)],
};

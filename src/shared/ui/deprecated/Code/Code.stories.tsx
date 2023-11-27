import type { Meta, StoryObj } from '@storybook/react';
import {
    ThemeDecorator,
    withStoryOrGlobalTheme,
} from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { Code } from './Code';

const meta: Meta<typeof Code> = {
    title: 'Shared/Code',
    component: Code,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Code>;

const code =
    "import type { Meta, StoryObj } from '@storybook/react';\n" +
    '\n' +
    "import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';\n" +
    "import { Theme } from 'shared/lib/context/ThemeContext';\n" +
    "import { Button, ButtonSize, ButtonTheme } from './Button';\n" +
    '\n' +
    'const meta: Meta<typeof Button> = {\n' +
    "    title: 'Shared/Button',\n" +
    '    component: Button,\n' +
    "    tags: ['autodocs'],\n" +
    '};\n' +
    '\n' +
    'export default meta;\n' +
    'type Story = StoryObj<typeof Button>;\n' +
    '\n' +
    'export const Primary: Story = {\n' +
    '    args: {\n' +
    "        children: 'Text',\n" +
    '    },\n' +
    '};';

export const Primary: Story = {
    args: {
        text: code,
    },
    decorators: [withStoryOrGlobalTheme(Theme.LIGHT)],
};

export const Dark: Story = {
    args: {
        text: code,
    },
    decorators: [withStoryOrGlobalTheme(Theme.DARK)],
};

export const Danger: Story = {
    args: {
        text: code,
    },
    decorators: [ThemeDecorator(Theme.DANGER)],
};

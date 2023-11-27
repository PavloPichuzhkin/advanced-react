import type { Meta, StoryObj } from '@storybook/react';
import { withStoryOrGlobalTheme } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { Code } from './Code';
import { RedesignDecorator } from '@/shared/config/storybook/RedesignDecorator';

const meta: Meta<typeof Code> = {
    title: 'Shared/Redesigned/Code',
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

export const Primary: Story = {};
Primary.args = { text: code };
Primary.decorators = [RedesignDecorator, withStoryOrGlobalTheme(Theme.LIGHT)];

// export const Dark: Story = {
//     args: {
//         text: code,
//     },
//     decorators: [RedesignDecorator, ThemeDecorator(Theme.DARK)],
// };
//
// export const Danger: Story = {
//     args: {
//         text: code,
//     },
//     decorators: [ThemeDecorator(Theme.DANGER), RedesignDecorator],
// };

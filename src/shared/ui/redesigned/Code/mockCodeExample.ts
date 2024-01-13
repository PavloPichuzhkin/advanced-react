export const codeExample = `
import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { Button, ButtonSize, ButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
    title: 'Shared/Button',
    component: Button,
    // tags: ['autodocs'],
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Text',
    },
};
`;

// export const codeExample =
//     "import type { Meta, StoryObj } from '@storybook/react';\n" +
//     '\n' +
//     "import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';\n" +
//     "import { Theme } from 'shared/lib/context/ThemeContext';\n" +
//     "import { Button, ButtonSize, ButtonTheme } from './Button';\n" +
//     '\n' +
//     'const meta: Meta<typeof Button> = {\n' +
//     "    title: 'Shared/Button',\n" +
//     '    component: Button,\n' +
//     "    tags: ['autodocs'],\n" +
//     '};\n' +
//     '\n' +
//     'export default meta;\n' +
//     'type Story = StoryObj<typeof Button>;\n' +
//     '\n' +
//     'export const Primary: Story = {\n' +
//     '    args: {\n' +
//     "        children: 'Text',\n" +
//     '    },\n' +
//     '};';

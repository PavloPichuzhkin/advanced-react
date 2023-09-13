import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { PartialStoreDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { ArticleBlockType } from '../../model/consts/articleConsts';
import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';

const meta: Meta<typeof ArticleCodeBlockComponent> = {
    title: 'Enteties/Article/ArticleCodeBlockComponent',
    component: ArticleCodeBlockComponent,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleCodeBlockComponent>;

const code = 'import type { Meta, StoryObj } from \'@storybook/react\';\n'
    + '\n'
    + 'import { ThemeDecorator } from \'shared/config/storybook/ThemeDecorator\';\n'
    + 'import { Theme } from \'shared/lib/context/ThemeContext\';\n'
    + 'import { Button, ButtonSize, ButtonTheme } from \'./Button\';\n'
    + '\n'
    + 'const meta: Meta<typeof Button> = {\n'
    + '    title: \'Shared/Button\',\n'
    + '    component: Button,\n'
    + '    tags: [\'autodocs\'],\n'
    + '};\n'
    + '\n'
    + 'export default meta;\n'
    + 'type Story = StoryObj<typeof Button>;\n'
    + '\n'
    + 'export const Primary: Story = {\n'
    + '    args: {\n'
    + '        children: \'Text\',\n'
    + '    },\n'
    + '};';

export const Primary: Story = {
    args: {
        block: {
            id: '4',
            type: ArticleBlockType.CODE,
            code,
        },
    },
};

export const Dark: Story = {
    args: {
        block: {
            id: '4',
            type: ArticleBlockType.CODE,
            code,
        },
    },
    decorators: [ThemeDecorator(Theme.DARK),

    ],
};

export const Danger: Story = {
    args: {
        block: {
            id: '4',
            type: ArticleBlockType.CODE,
            code,
        },
    },
    decorators: [ThemeDecorator(Theme.DANGER),

    ],
};

import type { Meta, StoryObj } from '@storybook/react';
import { ArticleBlockType } from '../../model/consts/articleConsts';
import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';
import { codeExample } from '@/shared/ui/redesigned/Code/mockCodeExample';

const meta: Meta<typeof ArticleCodeBlockComponent> = {
    title: 'Entities/Article/ArticleCodeBlockComponent/Deprecated',
    component: ArticleCodeBlockComponent,
    // tags: ['autodocs'],
    args: {
        block: {
            id: '4',
            type: ArticleBlockType.CODE,
            code: codeExample,
        },
    },
    // decorators: [ThemeDecorator(Theme.LIGHT)],
};

export default meta;
type Story = StoryObj<typeof ArticleCodeBlockComponent>;

export const Primary: Story = {};

export const Dark: Story = {};

export const Danger: Story = {
    decorators: [
        // TestDecorator('33333'),
        // ThemeDecorator(Theme.DANGER),
        // TestDecorator('44444'),
    ],
};

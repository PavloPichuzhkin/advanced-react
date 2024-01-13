import type { Meta, StoryObj } from '@storybook/react';
import { ArticleBlockType } from '../../model/consts/articleConsts';
import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';
import { codeExample } from '@/shared/ui/redesigned/Code/testing';

const meta: Meta<typeof ArticleCodeBlockComponent> = {
    title: 'Entities/Article/ArticleCodeBlockComponent/Redesigned',
    component: ArticleCodeBlockComponent,
    // tags: ['autodocs'],
    args: {
        block: {
            id: '4',
            type: ArticleBlockType.CODE,
            code: codeExample,
        },
    },
};

export default meta;
type Story = StoryObj<typeof ArticleCodeBlockComponent>;

export const Primary: Story = {};

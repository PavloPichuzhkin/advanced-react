import type { Meta, StoryObj } from '@storybook/react';
import { StoryFn } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { Button } from '../../../Button';
import { Dropdown } from './Dropdown';
import { RedesignDecorator } from '@/shared/config/storybook/RedesignDecorator';

const meta: Meta<typeof Dropdown> = {
    title: 'Shared/Redesigned/Popups/Dropdown',
    component: Dropdown,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Primary: Story = {
    args: {
        trigger: <Button as='span'>Value</Button>,
        items: [
            { content: 'Some content 1' },
            { content: 'Some content 2' },
            { content: 'Some content 3' },
        ],
    },
    decorators: [
        (Story: StoryFn) => (
            <div style={{ padding: '9rem' }}>
                <Story />
            </div>
        ),
        RedesignDecorator,
        ThemeDecorator(Theme.LIGHT),
    ],
};

// export const Dark: Story = {
//     args: {
//         trigger: <Button as='span'>Value</Button>,
//         items: [
//             { content: 'Some content 1' },
//             { content: 'Some content 2' },
//             { content: 'Some content 3' },
//         ],
//     },
//     decorators: [
//         // ThemeDecorator(Theme.DARK),
//         (Story: StoryFn) => (
//             <div style={{ padding: '7rem' }}>
//                 <Story />
//             </div>
//         ),
//     ],
// };

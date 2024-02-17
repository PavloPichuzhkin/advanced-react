import type { Meta, StoryObj } from '@storybook/react';
import { ScrollButton } from './ScrollButton';
import { MultiplyStories } from '@/shared/config/storybook/MultiplyStories';

const meta: Meta<typeof ScrollButton> = {
    title: 'Features/ScrollButton/Redesigned',
    component: ScrollButton,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ScrollButton>;

export const Primary: Story = {
    args: {
        wasSomeHeightScrolled: true,
        iconOpacity: 1,
    },
    decorators: [
        MultiplyStories({
            storiesNumber: 3,
            opacityItems: [0.2, 0.5, 0.99, 1.1],
        }),
    ],
};

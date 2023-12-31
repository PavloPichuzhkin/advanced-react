import type { Meta, StoryObj } from '@storybook/react';
import { Drawer } from './Drawer';
import { Text, TextSize } from '../../../deprecated/Text';
import { VStack } from '../../../redesigned/Stack';
import { RedesignDecorator } from '@/shared/config/storybook/RedesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';

const meta: Meta<typeof Drawer> = {
    title: 'Shared/Redesigned/Drawers/DrawerDeprecated',
    component: Drawer,
    // tags: ['autodocs'],
    args: {
        isOpen: true,
        lazy: false,
        children: (
            <VStack gap='16' align='center'>
                <Text
                    title='Some child 1'
                    text='Some child text 1'
                    size={TextSize.S}
                />
                <Text
                    title='Some child 2'
                    text='Some child text 1'
                    size={TextSize.M}
                />
                <Text
                    title='Some child 3'
                    text='Some child text 1'
                    size={TextSize.L}
                />
                <Text
                    title='Some child 4'
                    text='Some child text 1'
                    size={TextSize.XL}
                />
            </VStack>
        ),
    },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Primary: Story = {
    args: {},
    decorators: [],
};
Primary.decorators = [RedesignDecorator, ThemeDecorator(Theme.LIGHT)];

// export const Dark: Story = {
//     args: {},
//     decorators: [ThemeDecorator(Theme.DARK)],
// };
// export const Danger: Story = {
//     args: {},
//     decorators: [ThemeDecorator(Theme.DANGER)],
// };

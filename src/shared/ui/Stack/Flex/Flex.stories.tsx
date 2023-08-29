import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/lib/context/ThemeContext';
import { PartialStoreDecorator } from 'shared/config/storybook/StoreProviderDecorator';
import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
    title: 'Shared/Flex',
    component: Flex,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Row: Story = {
    args: {
        children: (
            <>
                <div>someText</div>
                <div>someText</div>
                <div>someText</div>
                <div>someText</div>
            </>
        ),
    },
    // decorators: [ThemeDecorator(Theme.DARK),
    //     PartialStoreDecorator({
    //         profile: {
    //             form: {
    //                 first: 'Pavlo',
    //             },
    //         },
    //     })],
};
export const RowGap8: Story = {
    args: {
        gap: '8',
        children: (
            <>
                <div>someText</div>
                <div>someText</div>
                <div>someText</div>
                <div>someText</div>
            </>
        ),
    },
};
export const RowGap16: Story = {
    args: {
        gap: '16',
        children: (
            <>
                <div>someText</div>
                <div>someText</div>
                <div>someText</div>
                <div>someText</div>
            </>
        ),
    },
};
export const RowGap32: Story = {
    args: {
        gap: '32',
        children: (
            <>
                <div>someText</div>
                <div>someText</div>
                <div>someText</div>
                <div>someText</div>
            </>
        ),
    },
};

export const Column: Story = {
    args: {
        direction: 'column',
        children: (
            <>
                <div>someText</div>
                <div>someText</div>
                <div>someText</div>
                <div>someText</div>
            </>
        ),
    },
};
export const ColumnGap8: Story = {
    args: {
        gap: '8',
        direction: 'column',
        children: (
            <>
                <div>someText</div>
                <div>someText</div>
                <div>someText</div>
                <div>someText</div>
            </>
        ),
    },
};
export const ColumnGap16: Story = {
    args: {
        gap: '16',
        direction: 'column',
        children: (
            <>
                <div>someText</div>
                <div>someText</div>
                <div>someText</div>
                <div>someText</div>
            </>
        ),
    },
};
export const ColumnGap32: Story = {
    args: {
        gap: '32',
        direction: 'column',
        children: (
            <>
                <div>someText</div>
                <div>someText</div>
                <div>someText</div>
                <div>someText</div>
            </>
        ),
    },
};

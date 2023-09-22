import type { Meta, StoryObj } from '@storybook/react';
import AdminPanelPage from './AdminPanelPage';

const meta: Meta<typeof AdminPanelPage> = {
    title: 'pages/AdminPanelPage',
    component: AdminPanelPage,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AdminPanelPage>;

export const Primary: Story = {
    args: {},
    decorators: [
        // ThemeDecorator(Theme.DARK),
        // PartialStoreDecorator({
        //     profile: {
        //         form: {
        //             first: 'Pavlo',
        //         },
        //     },
        // }),
        // (Story: StoryFn) => (
        //     <div style={{ padding: '5rem' }}><Story /></div>
        // )
    ],
};

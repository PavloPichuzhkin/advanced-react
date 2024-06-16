import type { Meta, StoryObj } from '@storybook/react';
import { reactRouterParameters } from 'storybook-addon-react-router-v6';
import Excel from './Excel';
import { getRouteExcel } from '@/shared/const/router';

const meta: Meta<typeof Excel> = {
    title: 'Pages/Excel',
    component: Excel,
};

export default meta;
type Story = StoryObj<typeof Excel>;

export const ExcelRedesigned: Story = {
    // parameters: {
    //     reactRouter: reactRouterParameters({ // dont work hash, try later new storybook-addon-remix-react-router
    //         location: {
    //             path: `${getRouteExcel()}`,
    //             pathParams: { tableId: '42' },
    //             hash: 'excel/42',
    //         },
    //         // routing: { path: `${getRouteExcel()}#excel/:tableId` },
    //         routing: { path: `${getRouteExcel()}` },
    //     }),
    // },
};

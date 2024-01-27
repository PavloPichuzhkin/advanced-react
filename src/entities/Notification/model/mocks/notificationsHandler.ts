import { rest } from 'msw';
import { isMockLoading } from '@/shared/lib/mock-server/isMockLoading';
import { isMockError } from '@/shared/lib/mock-server/isMockError';
import { mockNotifications } from './mockNotifications';
import { isMockEmpty } from '@/shared/lib/mock-server/isMockEmpty';
import { getGlobalDispatch } from '@/shared/lib/helpers/globalDispatch/globalDispatch';

export const notificationHandler = [
    rest.get(`${__API__}/notifications`, (req, res, ctx) => {
        if (isMockLoading()) {
            // setTimeout(() => {
            //     getGlobalDispatch({
            //         // Assistant for loki test here need to dispatch pending type from notificationApi, own store, like fetchArticleById
            //         // type: fetchArticleById.pending.type,
            //     });
            // }, 1000);
            return res(ctx.status(200), ctx.json({}), ctx.delay('infinite'));
        }

        if (isMockError()) {
            return res(ctx.status(500), ctx.json({}));
        }

        if (isMockEmpty()) {
            return res(ctx.status(200), ctx.json([]));
        }

        return res(ctx.status(200), ctx.json(mockNotifications));
    }),
];

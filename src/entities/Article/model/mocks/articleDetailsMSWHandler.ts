import { rest } from 'msw';
import { mockArticleData } from './mockArticleData';
import { getRouteArticleDetails } from '@/shared/const/router';
import { isMockLoading } from '@/shared/lib/mock-server/isMockLoading';
import { isMockError } from '@/shared/lib/mock-server/isMockError';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { getGlobalDispatch } from '@/shared/lib/helpers/globalDispatch/globalDispatch';

export const articleDetailsMSWHandler = [
    rest.get(
        `${__API__}${getRouteArticleDetails(':articleId')}`,
        (req, res, ctx) => {
            if (isMockLoading()) {
                setTimeout(() => {
                    getGlobalDispatch({
                        type: fetchArticleById.pending.type,
                    });
                }, 1000);
                // return res(
                //     ctx.status(200),
                //     ctx.json({}),
                //     // ctx.json(mockArticleData),
                //     ctx.delay('infinite'),
                // );
            }

            if (isMockError()) {
                return res(ctx.status(500), ctx.json({}));
            }

            return res(ctx.status(200), ctx.json(mockArticleData));
        },
    ),
];

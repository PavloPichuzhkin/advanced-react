import { rest } from 'msw';
import { mockArticleData } from './mockArticleData';
import { getRouteArticleDetails } from '@/shared/const/router';
import { isMockLoading } from '@/shared/lib/mock-server/isMockLoading';
import { isMockError } from '@/shared/lib/mock-server/isMockError';

export const articleDetailsHandler = [
    rest.get(
        `${__API__}${getRouteArticleDetails(':articleId')}`,
        (req, res, ctx) => {
            if (isMockLoading()) {
                return res(
                    ctx.status(200),
                    ctx.json({}),
                    ctx.delay('infinite'),
                );
            }

            if (isMockError()) {
                return res(ctx.status(500), ctx.json({}));
            }

            return res(ctx.status(200), ctx.json(mockArticleData));
        },
    ),
];

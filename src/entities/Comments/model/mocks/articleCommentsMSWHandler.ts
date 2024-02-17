import { rest } from 'msw';
import { isMockLoading } from '@/shared/lib/mock-server/isMockLoading';
import { isMockError } from '@/shared/lib/mock-server/isMockError';
import { selectEntitiesFromNormalizedData } from '@/shared/lib/helpers/selectEntities/selectEntities';
import { mockReturnArticleDetailsCommentsState } from './mockArticleDetailsComments';

export const articleCommentsMSWHandler = [
    rest.get(`${__API__}/comments`, (req, res, ctx) => {
        if (isMockLoading()) {
            // setTimeout(() => {
            //     getGlobalDispatch({
            //         type: fetchArticleById.pending.type,
            //     });
            // }, 1000);
            return res(
                ctx.status(200),
                ctx.json({}),
                // ctx.json(mockArticleData),
                ctx.delay('infinite'),
            );
        }

        if (isMockError()) {
            return res(ctx.status(500), ctx.json({}));
        }

        return res(
            ctx.status(200),
            ctx.json(
                selectEntitiesFromNormalizedData(
                    mockReturnArticleDetailsCommentsState(),
                ),
            ),
        );
    }),
];

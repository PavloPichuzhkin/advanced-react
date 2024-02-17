import { rest } from 'msw';
import { isMockLoading } from '@/shared/lib/mock-server/isMockLoading';
import { isStoryNameIncludes } from '@/shared/lib/mock-server/isStoryNameIncludes';
import { mockUser } from './mockUser';

export const userMSWHandler = [
    rest.get(
        `${__API__}/users/:id`,

        (req, res, ctx) => {
            const { id } = req.params;

            if (isMockLoading()) {
                return res(
                    ctx.status(200),
                    ctx.json({}),
                    ctx.delay('infinite'),
                );
            }

            if (isStoryNameIncludes('unauthorized')) {
                return res(ctx.status(500), ctx.json({}));
            }

            return res(ctx.status(200), ctx.json({ ...mockUser, id }));
        },
    ),
    rest.patch('/users/:id', async (req, res, ctx) => {
        const { id } = req.params;
        const body = await req.json();

        if (isMockLoading()) {
            return res(ctx.status(200), ctx.json({}), ctx.delay('infinite'));
        }

        if (isStoryNameIncludes('unauthorized')) {
            return res(ctx.status(500), ctx.json({}));
        }

        return res(ctx.status(200), ctx.json({ ...mockUser, id, ...body }));
    }),
];

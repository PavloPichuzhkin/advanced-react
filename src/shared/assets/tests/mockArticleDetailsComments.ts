import { UserRole } from '@/entities/User';
import { ArticleDetailsCommentsSchema } from '@/pages/ArticleDetailsPage';

export const mockReturnArticleDetailsCommentsState = (
    isLoading: boolean = false,
    error: string | undefined = undefined,
): ArticleDetailsCommentsSchema => {
    return {
        error,
        isLoading,
        ids: ['enhuptB', 'PFLc180', 33, 44],
        entities: {
            enhuptB: {
                // articleId: '19',
                // userId: '2',
                text: 'Some comment YO',
                id: 'enhuptB',
                user: {
                    id: '2',
                    username: 'user1',
                    // password: '123',
                    roles: [UserRole.ADMIN],
                    avatar: 'https://as1.ftcdn.net/v2/jpg/06/19/33/30/1000_F_619333024_IfgNj7pGIeoG3BUPHfEkBT15l7yi7HbG.jpg',
                },
            },
            PFLc180: {
                text: 'Some comment 2',
                id: 'PFLc180',
                user: {
                    id: '1',
                    username: 'admin',
                    roles: [UserRole.ADMIN],
                    avatar: 'https://as1.ftcdn.net/v2/jpg/05/56/29/10/1000_F_556291020_q2ieMiOCKYbtoLITrnt7qcSL1LJYyWrU.jpg',
                },
            },
            33: {
                text: 'Some comment with defaultAvatar',
                id: '33',
                user: {
                    id: '1',
                    username: 'admin Looong username',
                    roles: [UserRole.ADMIN],
                    // no avatar: 'https://as1.ftcdn.net/v2/jpg/05/56/29/10/1000_F_556291020_q2ieMiOCKYbtoLITrnt7qcSL1LJYyWrU.jpg',
                },
            },

            44: {
                text: 'Some comment Some comment Some comment Some comment Some comment Some comment Some comment',
                id: '44',
                user: {
                    id: '1',
                    username: 'admin Looong username',
                    roles: [UserRole.ADMIN],
                    avatar: 'https://as1.ftcdn.net/v2/jpg/05/56/29/10/1000_F_556291020_q2ieMiOCKYbtoLITrnt7qcSL1LJYyWrU.jpg',
                },
            },
        },
    };
};

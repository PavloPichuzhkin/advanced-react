import { UserRole } from '../model/consts/userConsts';
import avatar from '@/shared/assets/tests/storybook.jpg';
import { User } from '../model/types/user';

export const mockUser: User = {
    id: '1',
    username: 'admin',
    roles: [UserRole.ADMIN],
    jsonSettings: {},
    features: {
        isArticleRatingEnabled: true,
    },
    avatar,
};

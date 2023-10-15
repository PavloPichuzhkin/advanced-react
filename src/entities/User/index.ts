export { userReducer, userActions } from './model/slice/userSlice';

export type { UserSchema, User } from './model/types/user';

export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';

export { getUserInited } from './model/selectors/getUserInited/getUserInited';

export {
    isUserSuperAdmin,
    isUserAdmin,
    isUserManager,
    getUserRoles,
} from './model/selectors/roleSelectors/roleSelectors';
export { UserRole } from './model/consts/userConsts';
export {
    useJsonSettingByKey,
    useJsonSettings,
} from './model/selectors/jsonSettings/jsonSettings';
export { saveJsonSettings } from './model/services/saveJsonSettings';
export { initAuthData } from './model/services/initAuthData';

export enum UserRole {
    ADMIN = 'ADMIN',
    USER = 'USER',
    MANAGER = 'MANAGER',
    SUPER_ADMIN= 'SUPER_ADMIN',
}
export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles:UserRole[];
}

export interface UserSchema {
    authData?: User;
    _inited: boolean;
}

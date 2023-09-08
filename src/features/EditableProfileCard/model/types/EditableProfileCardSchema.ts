import { Profile } from 'enteties/Profile';
import { ValidateProfileError } from '../consts/consts';

export interface ProfileSchema {
    form?: Profile;
    data?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: ValidateProfileError[];
}

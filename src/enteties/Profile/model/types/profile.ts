import { Country } from 'enteties/CountrySelect';
import { Currency } from 'enteties/CurrencySelect/model/types/currency';

export interface Profile {
    first?: string;
    lastname?: string;
    age?: number,
    currency?: Currency,
    country?: Country;
    city?: string,
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    form?: Profile;
    data?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}

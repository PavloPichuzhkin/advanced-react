import { Currency } from 'enteties/CurrencySelect';
import { Country } from 'enteties/CountrySelect';

export interface Profile {
    first?: string;
    lastname?: string;
    age?: number,
    currency?: Currency,
    country?: Country;
    city?: string,
    username?: string;
    avatar?: string;
    id?: string;
}

import { Currency } from '@/entities/CurrencySelect';
import { Country } from '@/entities/CountrySelect';

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

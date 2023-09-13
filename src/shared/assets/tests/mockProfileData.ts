import { Currency } from '@/entities/CurrencySelect';
import { Country } from '@/entities/CountrySelect';
import { Profile } from '@/entities/Profile';
import avatar from './storybook.jpg';

export const mockProfileData:Profile = {
    first: 'Pavlo',
    lastname: 'Pichuzhkin',
    age: 222,
    currency: Currency.UAH,
    country: Country.NETHERLANDS,
    city: 'Kiev',
    username: 'admin',
    avatar,
};

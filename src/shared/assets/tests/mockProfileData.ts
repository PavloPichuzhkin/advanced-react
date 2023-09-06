import { Currency } from 'enteties/CurrencySelect';
import { Country } from 'enteties/CountrySelect';
import { Profile } from 'enteties/Profile';
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

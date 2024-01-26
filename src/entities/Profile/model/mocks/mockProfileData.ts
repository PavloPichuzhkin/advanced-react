import { Currency } from '@/entities/CurrencySelect';
import { Country } from '@/entities/CountrySelect';
import avatar from '@/shared/assets/tests/storybook.jpg';

export const mockProfileData = {
    first: 'Pavlo',
    lastname: 'Pichuzhkin',
    age: 222,
    currency: Currency.UAH,
    country: Country.NETHERLANDS,
    city: 'Kiev',
    username: 'admin',
    // eslint-disable-next-line max-len
    // avatar: 'https://images.unsplash.com/photo-1573547429441-d7ef62e04b63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=80',
    avatar,
};

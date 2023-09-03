import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'enteties/CountrySelect';
import { Currency } from 'enteties/CurrencySelect';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('should return profile form', () => {
        const data = {
            first: 'Pavlo',
            lastname: 'Pichuzhkin',
            age: 222,
            currency: Currency.UAH,
            country: Country.NETHERLANDS,
            city: 'Kiev',
            username: 'admin',
            avatar: 'some link',
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});

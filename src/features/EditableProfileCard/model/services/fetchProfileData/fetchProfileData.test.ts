import { TestAsyncThunk } from 'shared/lib/helpers/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'enteties/CurrencySelect';
import { Country } from 'enteties/CountrySelect';
import { fetchProfileData } from './fetchProfileData';

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

describe('fetchProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error login', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});

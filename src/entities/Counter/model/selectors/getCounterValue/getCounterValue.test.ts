import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counterEntity: { valueEntity: 10 },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});

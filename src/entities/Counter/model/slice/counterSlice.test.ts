import {
    counterReducerEntity,
    counterActionscounterEntity,
} from './counterSlice';
import { CounterSchemaEntity } from '../types/counterSchemaEntity';

describe('counterSlice.test', () => {
    test('decrement', () => {
        const state: CounterSchemaEntity = { valueEntity: 10 };

        expect(
            counterReducerEntity(
                state,
                counterActionscounterEntity.decrement(),
            ),
        ).toEqual({ valueEntity: 9 });
    });
    test('increment', () => {
        const state: CounterSchemaEntity = { valueEntity: 10 };

        expect(
            counterReducerEntity(
                state,
                counterActionscounterEntity.increment(),
            ),
        ).toEqual({ valueEntity: 11 });
    });

    test('should work with empty state', () => {
        expect(
            counterReducerEntity(
                undefined,
                counterActionscounterEntity.increment(),
            ),
        ).toEqual({ valueEntity: 4 });
    });
});

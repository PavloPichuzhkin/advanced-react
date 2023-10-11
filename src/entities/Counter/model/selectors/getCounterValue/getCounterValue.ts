import { buildSelector } from '@/shared/lib/store';
// import { CounterSchemaEntity } from '../../types/counterSchemaEntity';

// export const getCounterValue = createSelector(
//     getCounter,
//     (counterEntity: CounterSchemaEntity) => counterEntity.valueEntity,
// );

export const [useCounterEntityValue, getCounterValue] = buildSelector(
    (state) => state.counterEntity.valueEntity,
);

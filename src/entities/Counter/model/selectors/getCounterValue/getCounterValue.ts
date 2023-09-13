import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from '../getCounter/getCounter';
import { CounterSchemaEntity } from '../../types/counterSchemaEntity';

export const getCounterValue = createSelector(
    getCounter,
    (counterEntity: CounterSchemaEntity) => counterEntity.valueEntity,
);

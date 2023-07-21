import { CounterSchemaEntity } from 'entities/Counter';
import { CounterSchema } from 'widgets/Counter';

export interface StateSchema {
    counter: CounterSchema;
    counterEntity: CounterSchemaEntity;
}

import { CounterSchemaEntity } from 'enteties/Counter';
import { CounterSchema } from 'widgets/Counter';

export interface StateSchema {
    counter: CounterSchema;
    counterEntity: CounterSchemaEntity;
}

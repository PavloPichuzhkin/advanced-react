import { CounterSchemaEntity } from 'enteties/Counter';
import { CounterSchema } from 'widgets/Counter';
import { UserSchema } from 'enteties/User';
import { LoginSchema } from 'features/AuthByUsername';

export interface StateSchema {
    counter: CounterSchema;
    counterEntity: CounterSchemaEntity;
    user: UserSchema;
    loginForm: LoginSchema
}

import { StateSchema } from 'app/providers/StoreProvider';

export const getGeneratedSliced = (state: StateSchema) => state.generatedSliced.data;

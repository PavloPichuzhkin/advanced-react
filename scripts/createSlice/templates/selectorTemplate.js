const firstCharUpperCase = require('../firstCharUpperCase');

module.exports = (
    sliceName,
) => `import { StateSchema } from 'app/providers/StoreProvider';

export const get${firstCharUpperCase(
    sliceName,
)} = (state: StateSchema) => state.${sliceName}.data;
`;

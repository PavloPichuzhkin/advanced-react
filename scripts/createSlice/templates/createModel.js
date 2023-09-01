const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const reduxSliceTemplate = require('./reduxSliceTemplate');
const schemaTypeTemplate = require('./schemaTypeTemplate');
const selectorTemplate = require('./selectorTemplate');
const serviceTemplate = require('./serviceTemplate');

module.exports = async (layer, sliceName) => {
    const resolveModelPath = (...segments) => resolveRoot('src', layer, sliceName, 'model', ...segments);

    const createModelStructure = async () => {
        try {
            await fs.mkdir(resolveModelPath());
            await fs.mkdir(resolveModelPath('types'));
            await fs.mkdir(resolveModelPath('slices'));
            await fs.mkdir(resolveModelPath('selectors'));
            await fs.mkdir(resolveModelPath('services'));
        } catch (e) {
            console.log(`Failed to create model for slice ${sliceName}`, e);
        }
    };

    const createReduxSlice = async () => {
        try {
            await fs.writeFile(
                resolveModelPath('slices', `${sliceName}Slice.ts`),
                reduxSliceTemplate(sliceName),
            );
        } catch (e) {
            console.log('Failed to create redux slice', e);
        }
    };

    const createSchemaType = async () => {
        try {
            await fs.writeFile(
                resolveModelPath('types', `${sliceName}Schema.ts`),
                schemaTypeTemplate(sliceName),
            );
        } catch (e) {
            console.log('Failed to create state schema type', e);
        }
    };

    const createSelector = async () => {
        try {
            await fs.writeFile(
                resolveModelPath('selectors', `${sliceName}Selector.ts`),
                selectorTemplate(sliceName),
            );
        } catch (e) {
            console.log('Failed to create state selector', e);
        }
    };

    const createService = async () => {
        try {
            await fs.writeFile(
                resolveModelPath('services', `${sliceName}Service.ts`),
                serviceTemplate(sliceName),
            );
        } catch (e) {
            console.log('Failed to create state service', e);
        }
    };

    await createModelStructure();
    await createReduxSlice();
    await createSchemaType();
    await createSelector();
    await createService();
};

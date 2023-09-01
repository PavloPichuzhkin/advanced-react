const firstCharUpperCase = require('../firstCharUpperCase');

module.exports = (sliceName) => `import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ${firstCharUpperCase(sliceName)}Schema } from '../types/${sliceName}Schema';

export const fetch${firstCharUpperCase(sliceName)}Data = createAsyncThunk<
    ${firstCharUpperCase(sliceName)}Schema,
    string,
    ThunkConfig<string>
>(
    '${sliceName}/fetch${firstCharUpperCase(sliceName)}Data',
        async (${sliceName}Id, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;

            try {
                const response = await extra.api.get<${firstCharUpperCase(sliceName)}Schema>(\`/${sliceName}/\${${sliceName}Id}\`);
if (!response.data) {
    throw new Error();
}
return response.data;
} catch (e) {
    console.log(e);
    return rejectWithValue(String(e));
}
},
);
`;

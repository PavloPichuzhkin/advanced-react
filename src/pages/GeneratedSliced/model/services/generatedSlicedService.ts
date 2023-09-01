import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { GeneratedSlicedSchema } from '../types/generatedSlicedSchema';

export const fetchGeneratedSlicedData = createAsyncThunk<
    GeneratedSlicedSchema,
    string,
    ThunkConfig<string>
>(
    'generatedSliced/fetchGeneratedSlicedData',
        async (generatedSlicedId, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;

            try {
                const response = await extra.api.get<GeneratedSlicedSchema>(`/generatedSliced/${generatedSlicedId}`);
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

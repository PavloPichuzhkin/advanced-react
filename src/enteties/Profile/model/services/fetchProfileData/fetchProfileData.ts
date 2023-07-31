import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<string>
>(
    'profile/fetchProfileData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        try {
            console.log(extra.api);
            const response = await extra.api.get<Profile>('/profile');
            console.log(extra.api);
            console.log(response.data);
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue(String(e));
        }
    },
);
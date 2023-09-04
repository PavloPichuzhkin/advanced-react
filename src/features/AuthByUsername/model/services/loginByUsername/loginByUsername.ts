import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions, UserRole } from 'enteties/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { AxiosResponse } from 'axios';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>('login/loginByUsername', async (authData: LoginByUsernameProps, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI;
    try {
        const response = await extra.api.post<User>(
            '/login',
            authData,
        );
        // const responseD = () => response.data;
        // type responseData= ReturnType<typeof responseD>
        // const responseData:User = response.data;
        // console.log(responseData);

        // typescript did not catch the error!!!!!!!, server respond not User but
        // {
        //     "id": "1",
        //     "username": "admin",
        //     "password": "123",
        //     "role": ["ADMIN"],
        //     "avatar": "https://as1.ftcdn.net/v2/jpg/05/56/29/10/1000_F_556291020_q2ieMiOCKYbtoLITrnt7qcSL1LJYyWrU.jpg"
        // },   NOT roles!!!!!
        if (!response.data) {
            throw new Error();
        }

        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));

        dispatch(userActions.setAuthData(response.data));

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error403');
    }
});

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    LOCAL_STORAGE_LAST_DESIGN_KEY,
    LOCAL_STORAGE_THEME_KEY,
    USER_LOCALSTORAGE_KEY,
} from '@/shared/const/localstorage';
import { User, UserSchema } from '../types/user';
import { setFeatureFlags } from '@/shared/lib/features';
import { saveJsonSettings } from '../services/saveJsonSettings';
import { JsonSettings } from '../types/jsonSettings';
import { initAuthData } from '../services/initAuthData';
import { Theme } from '@/shared/lib/context/ThemeContext';

const initialState: UserSchema = {
    _inited: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            setFeatureFlags(action.payload.features);
            localStorage.setItem(USER_LOCALSTORAGE_KEY, action.payload.id);
            localStorage.setItem(
                LOCAL_STORAGE_LAST_DESIGN_KEY,
                action.payload.features?.isAppRedesigned ? 'new' : 'old',
            );
        },
        // initAuthData: (state) => {
        //     const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
        //     if (user) {
        //         const parsedUser = JSON.parse(user);
        //         state.authData = parsedUser;
        //         setFeatureFlags(parsedUser.features);
        //     }
        //     state._inited = true;
        // },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            saveJsonSettings.fulfilled,
            (state, { payload }: PayloadAction<JsonSettings>) => {
                if (state.authData) {
                    state.authData.jsonSettings = payload;
                }
            },
        );
        builder.addCase(
            initAuthData.fulfilled,
            (state, { payload }: PayloadAction<User>) => {
                state.authData = payload;
                setFeatureFlags(payload.features);
                localStorage.setItem(
                    LOCAL_STORAGE_THEME_KEY,
                    payload.jsonSettings?.theme as Theme,
                );
                localStorage.setItem(
                    LOCAL_STORAGE_LAST_DESIGN_KEY,
                    payload.features?.isAppRedesigned ? 'new' : 'old',
                );

                state._inited = true;
            },
        );
        builder.addCase(initAuthData.rejected, (state) => {
            state._inited = true;
        });
    },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;

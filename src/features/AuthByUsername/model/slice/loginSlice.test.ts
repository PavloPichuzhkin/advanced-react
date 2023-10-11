import { DeepPartial } from '@reduxjs/toolkit';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';
import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '123' };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setUsername('123123'),
            ),
        ).toEqual({ username: '123123' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setPassword('123123'),
            ),
        ).toEqual({ password: '123123' });
    });

    test('test sets isLoading = true when loginByUsername is pending', () => {
        const initialState: DeepPartial<LoginSchema> = {
            password: '123',
            username: '123',
            isLoading: false,
        };
        const action = { type: loginByUsername.pending.type };
        expect(loginReducer(initialState as LoginSchema, action)).toEqual({
            password: '123',
            username: '123',
            isLoading: true,
        });
    });

    test('test sets error when loginByUsername is rejected', () => {
        const initialState: DeepPartial<LoginSchema> = {
            username: '123',
            isLoading: true,
        };
        const action = {
            type: loginByUsername.rejected.type,
            payload: 'some error',
        };
        expect(loginReducer(initialState as LoginSchema, action)).toEqual({
            username: '123',
            isLoading: false,
            error: 'some error',
        });
    });

    test('test username and password will not change when loginByUsername is fulfilled', () => {
        const initialState: DeepPartial<LoginSchema> = {
            username: '123',
            password: '123',
            isLoading: true,
        };
        const action = {
            type: loginByUsername.fulfilled.type,
            payload: { password: '123123', username: '123123' },
        };

        expect(loginReducer(initialState as LoginSchema, action)).toEqual({
            // password: '123123', username: '123123', isLoading: false, error: undefined,
            // loginByUsername.fulfilled sets isLoading and userActions.setAuthData
            password: '123',
            username: '123',
            isLoading: false,
            error: undefined,
        });
    });
});

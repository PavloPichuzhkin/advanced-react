import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useSelector } from 'react-redux';
import React, { memo, useCallback, useEffect } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getUsername } from 'features/AuthByUsername/model/selectors/getUsername/getUsername';
import { getPassword } from 'features/AuthByUsername/model/selectors/getPassword/getPassword';
import { getLoginError } from 'features/AuthByUsername/model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from 'features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useNavigate } from 'react-router-dom';
import { fetchProfileData } from 'enteties/Profile';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { userActions } from 'enteties/User';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

export interface LoginFormProps {
    className?: string;
    onSuccess:()=>void
}

const reducers:ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const username = useSelector(getUsername);
    const password = useSelector(getPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ password, username }));
        // console.log(result);
        if (result.meta.requestStatus === 'fulfilled') {
            // const profileData = await dispatch(fetchProfileData());
            // if (profileData.meta.requestStatus === 'fulfilled') {

            onSuccess();
            // }

            // navigate('/', { replace: true });
        }
    }, [dispatch, onSuccess, password, username]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            onLoginClick();
        }
    }, [onLoginClick]);

    useEffect(() => {
        if (username && password) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [onKeyDown, password, username]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Authorization form')} />
                {error && (
                    <Text
                        text={t('Incorrect username or password')}
                        theme={TextTheme.ERROR}
                    />
                )}
                <Input
                    autofocus
                    type="text"
                    className={cls.input}
                    placeholder={t('Enter username')}
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    type="text"
                    className={cls.input}
                    placeholder={t('Enter password')}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    className={cls.loginBtn}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t('Sign in')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});
export default LoginForm;

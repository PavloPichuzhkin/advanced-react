import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import React, { memo, useCallback, useEffect } from 'react';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getPassword } from '../../model/selectors/getPassword/getPassword';
import { getUsername } from '../../model/selectors/getUsername/getUsername';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppText } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const reducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const username = useSelector(getUsername);
    const password = useSelector(getPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);
    const forceUpdate = useForceUpdate();

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

        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
            // window.location.reload();

            forceUpdate();
        }
    }, [dispatch, forceUpdate, onSuccess, password, username]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                onLoginClick();
            }
        },
        [onLoginClick],
    );

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
            <ToggleFeatures
                feature='isAppRedesigned'
                on={
                    <VStack
                        gap='16'
                        className={classNames(cls.LoginForm, {}, [className])}
                    >
                        {error ? (
                            <AppText
                                title={t('Incorrect username or password')}
                                variant='error'
                            />
                        ) : (
                            <AppText title={t('Authorization form')} />
                        )}
                        <Input
                            autofocus
                            type='text'
                            placeholder={t('Enter username')}
                            onChange={onChangeUsername}
                            value={username}
                        />
                        <Input
                            type='text'
                            className={cls.input}
                            placeholder={t('Enter password')}
                            onChange={onChangePassword}
                            value={password}
                        />
                        <Button
                            className={cls.loginBtn}
                            onClick={onLoginClick}
                            disabled={isLoading}
                        >
                            {t('Sign in')}
                        </Button>
                    </VStack>
                }
                off={
                    <div className={classNames(cls.LoginForm, {}, [className])}>
                        <Text title={t('Authorization form')} />
                        {error && (
                            <Text
                                text={t('Incorrect username or password')}
                                theme={TextTheme.ERROR}
                            />
                        )}
                        <InputDeprecated
                            autofocus
                            type='text'
                            className={cls.input}
                            placeholder={t('Enter username')}
                            onChange={onChangeUsername}
                            value={username}
                        />
                        <InputDeprecated
                            type='text'
                            className={cls.input}
                            placeholder={t('Enter password')}
                            onChange={onChangePassword}
                            value={password}
                        />
                        <ButtonDeprecated
                            className={cls.loginBtn}
                            theme={ButtonTheme.OUTLINE}
                            onClick={onLoginClick}
                            disabled={isLoading}
                        >
                            {t('Sign in')}
                        </ButtonDeprecated>
                    </div>
                }
            />
        </DynamicModuleLoader>
    );
});
export default LoginForm;

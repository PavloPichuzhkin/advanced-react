import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                autofocus
                type="text"
                className={cls.input}
                placeholder={t('Enter username')}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Enter password')}
            />
            <Button
                className={cls.loginBtn}
                theme={ButtonTheme.OUTLINE}
            >
                {t('Sign in')}
            </Button>
        </div>
    );
};

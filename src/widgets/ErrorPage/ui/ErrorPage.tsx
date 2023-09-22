import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    // const theme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;
    const { theme } = useTheme();

    return (
        <div className={classNames(cls.ErrorPage, {}, [className, 'app', theme])}>
            <p>{t('An unexpected error occurred')}</p>
            <Button
                onClick={reloadPage}
                theme={ButtonTheme.BACKGROUND_INVERTED}
            >
                {t('Refresh the page')}
            </Button>
        </div>
    );
};

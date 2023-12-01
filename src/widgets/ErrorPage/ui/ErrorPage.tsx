import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import cls from './ErrorPage.module.scss';
import {
    getToggleFeaturesAppClass,
    ToggleFeatures,
} from '@/shared/lib/features';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { AppText } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';

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

    // @ts-ignore
    // @ts-ignore
    return (
        <div
            className={classNames(cls.ErrorPage, {}, [
                className,
                // getToggleFeaturesAppClass(),
                // theme,
                getToggleFeaturesAppClass(),
                __PROJECT__ !== 'storybook' ? theme : '',
            ])}
        >
            <VStack gap='24' align='center'>
                <ToggleFeatures
                    feature='isAppRedesigned'
                    on={
                        <>
                            <AppText
                                title={`${t('An unexpected error occurred')}!`}
                                size='l'
                            />
                            <Button onClick={reloadPage} variant='outline'>
                                {t('Refresh the page')}
                            </Button>
                        </>
                    }
                    off={
                        <>
                            <Text
                                title={`${t('An unexpected error occurred')}!`}
                                size={TextSize.L}
                            />
                            <ButtonDeprecated
                                onClick={reloadPage}
                                theme={ButtonTheme.BACKGROUND_INVERTED}
                            >
                                {t('Refresh the page')}
                            </ButtonDeprecated>
                        </>
                    }
                />
            </VStack>
        </div>
    );
};

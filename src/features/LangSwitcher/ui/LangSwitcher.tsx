import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'uk' ? 'en' : 'uk');
    };

    return (
        <ToggleFeatures
            feature='isAppRedesigned'
            on={
                <Button onClick={toggle} variant='clear'>
                    {short ? t('Short Language') : t('Language')}
                </Button>
            }
            off={
                <ButtonDeprecated
                    className={classNames('', {}, [className])}
                    theme={ButtonTheme.CLEAR}
                    onClick={toggle}
                >
                    {short ? t('Short Language') : t('Language')}
                </ButtonDeprecated>
            }
        />
    );
});

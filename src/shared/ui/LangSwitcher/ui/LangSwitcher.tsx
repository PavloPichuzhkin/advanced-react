import cls from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button'
import { classNames } from 'shared/lib/helpers/classNames/classNames'

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation()

    const toggle = async () => {
        void i18n.changeLanguage(i18n.language === 'uk' ? 'en' : 'uk')
    // i18n.changeLanguage(i18n.language === 'uk' ? 'en' : 'uk');
    }
    // console.log(i18n.language)
    // console.log(i18n.options)

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t('Language')}
        </Button>
    )
}

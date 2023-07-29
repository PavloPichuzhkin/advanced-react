import { useTranslation } from 'react-i18next';
import { memo } from 'react';

const MainPage = () => {
    const { t } = useTranslation();

    return <div>{t('Main page')}</div>;
};

export default memo(MainPage);

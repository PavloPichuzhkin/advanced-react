import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'shared/ui/Page/Page';

const MainPage = () => {
    const { t } = useTranslation();

    return <Page>{t('Main page')}</Page>;
};

export default memo(MainPage);

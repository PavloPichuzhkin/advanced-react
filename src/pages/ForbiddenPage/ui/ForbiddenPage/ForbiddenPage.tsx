import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Page } from '@/widgets/Page';
import cls from './ForbiddenPage.module.scss';

interface ForbiddenPageProps {
    className?: string;
}

const ForbiddenPage = memo((props: ForbiddenPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <Page data-testid='ForbiddenPage'>
            <div className={classNames(cls.ForbiddenPage, {}, [className])}>
                {t('You have no access to this page')}
            </div>
        </Page>
    );
});
export default ForbiddenPage;

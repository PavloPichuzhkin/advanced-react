import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Page } from '@/widgets/Page';
import cls from './AdminPanelPage.module.scss';

interface AdminPanelPageProps {
    className?: string;
}

const AdminPanelPage = memo((props: AdminPanelPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <Page data-testid='AdminPanelPage'>
            <div className={classNames(cls.AdminPanelPage, {}, [className])}>
                {t('Admin panel')}
            </div>
        </Page>
    );
});
export default AdminPanelPage;

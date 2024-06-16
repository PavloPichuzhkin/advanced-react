import React, { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { Page } from '@/widgets/Page';
import '../model/scss/index.scss';
import { Router } from '../model/core/routes/Router.jsx';
import { DashboardPage } from '../model/pages/DashboardPage';
import { ExcelPageClass } from '../model/pages/ExcelPage';

const ExcelPage = () => {
    const location = useLocation();

    const { i18n } = useTranslation();

    useEffect(() => {
        const router = new Router('#excel', {
            dashboard: DashboardPage,
            excel: ExcelPageClass,
        });

        return () => {
            router.destroy();
        };
    }, [i18n.language, location.hash]);

    return (
        <Page data-testid='ExcelPage'>
            <div id='excel' />
        </Page>
    );
};

export default memo(ExcelPage);

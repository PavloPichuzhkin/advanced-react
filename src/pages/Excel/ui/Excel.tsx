import React, { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
// import i18n from '@/shared/config/i18n/i18n'; // it looks like there i no state
import { Header } from '../model/components/header/Header';
import { Toolbar } from '../model/components/toolbar/Toolbar';
import { Formula } from '../model/components/formula/Formula';
import { Table } from '../model/components/table/Table'; // !!!! import { Table } from 'react-virtualized';
import { Excel } from '../model/components/excel/Excel';
import { Page } from '@/widgets/Page';
import '../model/scss/index.scss';

// https://betterprogramming.pub/4-ways-of-adding-external-js-files-in-reactjs-823f85de3668
// https://stackoverflow.com/questions/34424845/adding-script-tag-to-react-jsx

const AboutPageExcel = () => {
    const { i18n } = useTranslation();

    useEffect(() => {
        const excel = new Excel('#excel', {
            components: [Header, Toolbar, Formula, Table],
        });

        excel.render();
        return () => {
            excel.clearRoot();
        };
    }, [i18n.language]);
    return (
        <Page data-testid='AboutPage'>
            <div id='excel' />
        </Page>
    );
};

export default memo(AboutPageExcel);

import React, { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import '../model/scss/index.scss';
import { Router } from '../model/core/routes/Router';
import { DashboardPage } from '../model/pages/DashboardPage';
import { ExcelPageClass } from '../model/pages/ExcelPage';

// https://betterprogramming.pub/4-ways-of-adding-external-js-files-in-reactjs-823f85de3668
// https://stackoverflow.com/questions/34424845/adding-script-tag-to-react-jsx

const ExcelPage = () => {
    // console.log(window.history);
    // const location = useLocation();
    // console.log(location);

    const { i18n } = useTranslation();

    useEffect(() => {
        // eslint-disable-next-line no-new
        const router = new Router('#excel', {
            dashboard: DashboardPage,
            excel: ExcelPageClass,
        });
        return () => {};
    }, [
        i18n.language,
        // location
    ]);
    return (
        <Page data-testid='ExcelPage'>
            <div id='excel' />
        </Page>
    );
};

export default memo(ExcelPage);

// const ExcelPage = () => {
//     const store = createStore(rootReducer, initialState);
//     const stateListener = debounce((state: unknown) => {
//         console.log('App State: ', state);
//         storage('excel-state', state);
//     }, 900);
//
//     store.subscribe(stateListener);
//
//     const { i18n } = useTranslation();
//
//     useEffect(() => {
//         const excel = new Excel('#excel', {
//             components: [Header, Toolbar, Formula, Table],
//             store,
//         });
//
//         excel.render();
//         return () => {
//             excel.clearRoot();
//         };
//     }, [i18n.language, store]);
//     return (
//         <Page data-testid='ExcelPage'>
//             <div id='excel' />
//         </Page>
//     );
// };
//
// export default memo(ExcelPage);

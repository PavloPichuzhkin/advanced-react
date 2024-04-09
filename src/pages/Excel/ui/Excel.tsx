import React, { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { Page } from '@/widgets/Page';
import '../model/scss/index.scss';
import { Router } from '../model/core/routes/Router';
import { DashboardPage } from '../model/pages/DashboardPage';
import { ExcelPageClass } from '../model/pages/ExcelPage';

// https://betterprogramming.pub/4-ways-of-adding-external-js-files-in-reactjs-823f85de3668
// https://stackoverflow.com/questions/34424845/adding-script-tag-to-react-jsx

const ExcelPage = () => {
    const location = useLocation();
    // console.log('location', typeof location.hash);
    // console.log('location', window.location.hash);

    const { i18n } = useTranslation();

    // const [hasRerender, setHasRerender] = useState(false);
    // const renderCounterRef = useRef(0) as MutableRefObject<number>;

    useEffect(() => {
        // window.addEventListener('hashchange', () => {
        //     console.log('hashchange');
        // });
        // eslint-disable-next-line no-new
        const router = new Router('#excel', {
            dashboard: DashboardPage,
            excel: ExcelPageClass,
        });

        // if (location.hash === '#db' && renderCounterRef.current > 0) {
        //     setHasRerender(true);
        //     renderCounterRef.current = -1;
        // }
        // renderCounterRef.current += 1;
        // console.log(
        //     'hasRerender',
        //     hasRerender,
        //     'renderCount',
        //     renderCounterRef.current,
        // );
        // console.log(router.getRoute());

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

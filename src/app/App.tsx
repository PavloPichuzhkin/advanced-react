import './styles/index.scss';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';
import { AppRouter } from './providers/router';
import { Sidebar } from '@/widgets/Sidebar';
import { getUserInited, initAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Spinner } from '@/shared/ui/deprecated/Spinner';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import { MainLayout } from '@/shared/layouts';

function App() {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(initAuthData());
        // console.log('userActions.initAuthData()');
    }, [dispatch]);

    if (!inited) {
        return (
            <div
                className={classNames('app', {}, [theme])}
                // className={classNames(
                //     toggleFeatures({
                //         name: 'isAppRedesigned',
                //         on: () => 'app_redesigned',
                //         off: () => 'app_redesigned',
                //     }),
                //     {},
                //     [theme],
                // )}
                style={{
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Spinner />
            </div>
        );
    }

    return (
        <ToggleFeatures
            feature='isAppRedesigned'
            on={
                <div
                    id='app'
                    className={classNames('app_redesigned', {}, [theme])}
                >
                    <Suspense fallback=''>
                        <MainLayout
                            sidebar={<Sidebar />}
                            content={<AppRouter />}
                            header={<Navbar />}
                            toolbar={<div>1111111111</div>}
                        />
                    </Suspense>
                </div>
            }
            off={
                <div id='app' className={classNames('app', {}, [theme])}>
                    <Suspense fallback=''>
                        {/* for i18next */}
                        <Navbar />
                        <div className='content-page'>
                            <Sidebar />
                            {inited && <AppRouter />}
                        </div>
                    </Suspense>
                </div>
            }
        />
    );
}

export default App;

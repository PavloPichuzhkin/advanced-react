import './styles/index.scss';
import { useTheme } from 'shared/lib/hooks/useTheme/useTheme';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { AppRouter } from 'app/providers/router';
import { Suspense, useEffect } from 'react';
import { Sidebar } from 'widgets/Sidebar';
import { getUserInited, userActions } from 'enteties/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';

function App() {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
        // console.log('userActions.initAuthData()');
    }, [dispatch]);

    return (

        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                {/* for i18next */}
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {inited && <AppRouter />}
                </div>
            </Suspense>

        </div>
    );
}

export default App;

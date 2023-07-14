import './styles/index.scss';
import { useTheme } from 'shared/lib/hooks/useTheme/useTheme';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { AppRouter } from 'app/providers/router';
import { Suspense } from 'react';
import { Sidebar } from 'widgets/Sidebar';

function App() {
    const { theme } = useTheme();

    return (

        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                {/* for i18next */}
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>

        </div>
    );
}

export default App;

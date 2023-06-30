import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {useTheme} from "shared/lib/hooks/useTheme/useTheme";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {classNames} from "shared/lib/helpers/classNames/classNames";

function App(props: any) {
    const {theme, toggleTheme} = useTheme()

    console.log(theme)
    return (

        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage/>}/>
                    <Route path={'/'} element={<MainPage/>}/>
                </Routes>
            </Suspense>

        </div>
    );
}

export default App;

import './styles/index.scss'
import {useTheme} from "shared/lib/hooks/useTheme/useTheme";
import {classNames} from "shared/lib/helpers/classNames/classNames";
import {Navbar} from "widgets/Navbar";
import {AppRouter} from "app/providers/ThemeProvider/router";

function App() {
    const {theme, toggleTheme} = useTheme()

    return (

        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <button onClick={toggleTheme}>TOGGLE</button>
            <AppRouter/>

        </div>
    );
}

export default App;

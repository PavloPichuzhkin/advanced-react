
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import App from "./app/App";
import {ThemeProvider} from "app/providers/ThemeProvider";

const domNode = document.getElementById('root');

const root = createRoot(domNode );
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
);

//TODO test toto webstorm

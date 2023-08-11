import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import ErrorBoundary from 'app/providers/ErrorBoundary/ui/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';
import { StrictMode } from 'react';
import App from './app/App';
import './shared/config/i18n/i18n';

const domNode = document.getElementById('root') as HTMLElement;
// if (!domNode) {
//     throw new Error(
//         'root not found',
//     );
// }

const root = createRoot(domNode);
root.render(
    // <StrictMode>
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>

                <ThemeProvider>
                    <App />
                </ThemeProvider>

            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>
    // </StrictMode>
    ,
);

// TODO test toto webstorm

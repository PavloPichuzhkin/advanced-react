import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import ErrorBoundary from 'app/providers/ErrorBoundary/ui/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';
import { StrictMode } from 'react';
import App from './app/App';
import './shared/config/i18n/i18n';

const domNode = document.getElementById('root');

const root = createRoot(domNode);
root.render(
    <StrictMode>
        <StoreProvider>
            <ErrorBoundary>
                <BrowserRouter>
                    <ThemeProvider>
                        <App />
                    </ThemeProvider>
                </BrowserRouter>
            </ErrorBoundary>
        </StoreProvider>
    </StrictMode>,
);

// TODO test toto webstorm

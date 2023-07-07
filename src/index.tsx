import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import ErrorBoundary from 'app/providers/ErrorBoundary/ui/ErrorBoundary';
import App from './app/App';

import './shared/config/i18n/i18n';

const domNode = document.getElementById('root');

const root = createRoot(domNode);
root.render(
    <ErrorBoundary>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </ErrorBoundary>,
);

// TODO test toto webstorm

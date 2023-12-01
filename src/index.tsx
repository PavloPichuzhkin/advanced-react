import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import ErrorBoundary from '@/app/providers/ErrorBoundary/ui/ErrorBoundary';
import { StoreProvider } from '@/app/providers/StoreProvider';
import App from './app/App';
import './shared/config/i18n/i18n';
import { ForceUpdateProvider } from '@/shared/lib/render/forceUpdate';

const domNode = document.getElementById('root') as HTMLElement;
if (!domNode) {
    throw new Error('Element with ID = "root" not found');
}

const root = createRoot(domNode);
root.render(
    // <StrictMode>
    <BrowserRouter>
        <ForceUpdateProvider>
            <StoreProvider>
                <App />
            </StoreProvider>
        </ForceUpdateProvider>
    </BrowserRouter>,
    // </StrictMode>,
);

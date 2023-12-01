import React from 'react';
import ErrorBoundary from '../../ErrorBoundary/ui/ErrorBoundary';

export const withErrorBoundary = (Component: React.ComponentType) => {
    return () => {
        return (
            <ErrorBoundary>
                <Component />
            </ErrorBoundary>
        );
    };
};

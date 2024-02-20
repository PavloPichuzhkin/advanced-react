import React from 'react';
import ErrorBoundary from '../../ErrorBoundary/ui/ErrorBoundary';

export const withErrorBoundary = (Component: React.ComponentType) => {
    return (props: any) => {
        return (
            <ErrorBoundary>
                <Component {...props} />
            </ErrorBoundary>
        );
    };
};

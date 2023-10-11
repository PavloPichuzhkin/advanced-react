import React from 'react';

// export const LoginFormAsync = React.lazy(() => import('./LoginForm'));

export const LoginFormAsync = React.lazy(
    async () =>
        new Promise((resolve) => {
            setTimeout(() => {
                // @ts-ignore
                resolve(import('./LoginForm'));
            }, 1500);
        }),
);

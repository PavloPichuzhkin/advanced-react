import React from 'react';

export const LoginFormAsync = React.lazy(async () => new Promise((resolve) => {
    // @ts-expect-error
    setTimeout(() => { resolve(import('./LoginForm')); }, 1500);
}));

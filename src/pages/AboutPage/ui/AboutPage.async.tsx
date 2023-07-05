import React from 'react';

// export const AboutPageAsync = React.lazy(() =>import('./AboutPage'))
export const AboutPageAsync = React.lazy(
    async () => new Promise((resolve) => {
        // @ts-expect-error
        // don't do this
        setTimeout(() => { resolve(import('./AboutPage')); }, 1500);
    }),
);

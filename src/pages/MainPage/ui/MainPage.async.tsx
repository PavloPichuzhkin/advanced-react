import React, { lazy } from 'react';

export const MainPageAsync = lazy(() => import('./MainPage'));

// export const MainPageAsync = React.lazy(async () => new Promise((resolve) => {
//     // @ts-expect-error
//     setTimeout(() => { resolve(import('./MainPage')); }, 1500);
// }));

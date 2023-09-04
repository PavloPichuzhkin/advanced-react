import React from 'react';

export const ForbiddenPageAsync = React.lazy(() => import('./ForbiddenPage'));

// export const ForbiddenPageAsync = React.lazy(
//     async () => new Promise((resolve) => {
//         // @ts-expect-error
//         // don't do this
//         setTimeout(() => { resolve(import('./ForbiddenPage')); }, 1500);
//     }),
// );

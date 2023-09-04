import React from 'react';

export const AdminPanelPageAsync = React.lazy(() => import('./AdminPanelPage'));

// export const AdminPanelPageAsync = React.lazy(
//     async () => new Promise((resolve) => {
//         // @ts-expect-error
//         // don't do this
//         setTimeout(() => { resolve(import('./AdminPanelPage')); }, 1500);
//     }),
// );

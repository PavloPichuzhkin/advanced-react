import React from 'react';

export const ExcelAsync = React.lazy(() => import('./Excel'));

// export const ExcelAsync = React.lazy(
//     async () => new Promise((resolve) => {
//         // @ts-expect-error
//         // don't do this
//         setTimeout(() => { resolve(import('./Excel')); }, 1500);
//     }),
// );

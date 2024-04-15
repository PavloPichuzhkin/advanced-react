import React from 'react';

export const ExcelAsync = React.lazy(() => import('./Excel'));

// export const ExcelAsync = React.lazy(
//     async () =>
//         new Promise((resolve) => {
//             setTimeout(() => {
//                 // @ts-expect-error
//                 resolve(import('./Excel'));
//             }, 3500);
//         }),
// );

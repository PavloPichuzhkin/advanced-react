import { lazy } from 'react';

export const ArticlePageGreetingAsync = lazy(
    () => import('./ArticlePageGreeting'),
);

// export const ArticlePageGreetingAsync = lazy(
//     () =>
//         new Promise((resolve) => {
//             // @ts-ignore
//             setTimeout(() => resolve(import('./ArticlePageGreeting')), 0);
//         }),
// );

import React from 'react'

// export const MainPageAsync = lazy(() => import('./MainPage'));
export const MainPageAsync = React.lazy(async () =>
    await new Promise(resolve => {
        // @ts-expect-error
        setTimeout(() => { resolve(import('./MainPage')) }, 1500)
    }))

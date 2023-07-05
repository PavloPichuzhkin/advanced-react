import React from 'react'

// export const AboutPageAsync = React.lazy(() =>import('./AboutPage'))
export const AboutPageAsync = React.lazy(
    async () =>
        await new Promise((resolve) => {
            // don't do this
            setTimeout(() => { resolve(import('./AboutPage')) }, 1500)
        })
)

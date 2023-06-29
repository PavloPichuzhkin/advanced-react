import React from "react";

// export const AboutPageAsync = React.lazy(() =>import('./AboutPage'))
export const AboutPageAsync = React.lazy(
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            // dont do this
            setTimeout(() => resolve(import("./AboutPage")), 1500);
        })
);

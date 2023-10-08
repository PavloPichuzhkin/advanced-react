import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        // setupNodeEvents(on, config) {
        //     // implement node event listeners here
        // },
        baseUrl: 'http://localhost:3003',
        // baseUrl: 'http://127.0.0.1:5173/',
    },

    component: {
        devServer: {
            framework: 'react',
            bundler: 'webpack',
        },
    },
});

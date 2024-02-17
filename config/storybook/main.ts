import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
    // stories: [
    //     '../../src/entities/**/*.stories.@(js|jsx|ts|tsx)',
    //     '../../src/shared/**/*.stories.@(js|jsx|ts|tsx)',
    // ],

    addons: [
        '@storybook/addon-links',
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: false, // 👈 disable the backgrounds addon
            },
        },
        '@storybook/addon-interactions',
        '@storybook/addon-a11y',
        'storybook-addon-react-router-v6',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    docs: {
        autodocs: 'tag',
        defaultName: 'Documentation',
    },
    staticDirs: ['../../public'],
};
export default config;

import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        locales: '',
        buildLocales: '',
    };
    // // https://stackoverflow.com/questions/51771077/storybook-with-absolute-paths
    // // modules: [path.resolve(__dirname, 'src'), 'node_modules']
    // config!.resolve!.modules = [];
    // config!.resolve!.modules!.push(paths.src);
    // config!.resolve!.modules!.push('node_modules');
    config!.resolve!.modules!.push(paths.src);
    // console.log(config!.resolve!.modules);
    config!.resolve!.extensions!.push('.ts', '.tsx');
    config!.resolve!.alias = {
        ...config!.resolve!.alias,
        '@': paths.src,
    };

    // eslint-disable-next-line no-param-reassign
    // @ts-ignore
    config!.module!.rules = config.module!.rules!.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.(svg|png|jpe?g|gif|woff2|woff)$/i };
        }
        // if (/png|jpe?g|gif|woff2|woff/.test(rule.test as string)) {
        //     return { ...rule, exclude: /\.(png|jpe?g|gif|woff2|woff)$/i }; /// \.(png|jpe?g|gif|woff2|woff)$/i
        // }
        return rule;
    });

    config!.module!.rules.push({
        test: /\.svg$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: 'convertColors',
                                params: {
                                    currentColor: true,
                                },
                            },
                        ],
                    },
                },
            },
        ],
    });
    config!.module!.rules.push({
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    });
    // {
    //     test: /\.(svg|ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
    //         type: 'asset/resource',
    //     generator: { filename: 'static/media/[path][name][ext]' },
    //     exclude: /\.svg$/i
    // },

    config!.module!.rules.push(buildCssLoader(true));
    console.log(config!.module!.rules);

    config!.plugins!.push(
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify(''),
            // __API__: JSON.stringify('http://localhost:8000'),
            __PROJECT__: JSON.stringify('storybook'),
        }),
    );

    return config;
};

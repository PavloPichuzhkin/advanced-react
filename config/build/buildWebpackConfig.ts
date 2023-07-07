import webpack from 'webpack';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { buildLoaders } from './buildLoaders';
import { BuildOptions } from './types/config';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {
        paths, mode, isDev, port,
    } = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: 'bundle.[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}

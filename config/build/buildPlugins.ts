import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import CopyPlugin from "copy-webpack-plugin";
import CircularDependencyPlugin from "circular-dependency-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import { BuildOptions } from "./types/config";

export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
    const {
        paths, isDev, apiUrl, project, analyzer
    } = options;

    const isProd = !isDev;

    const plugins = [
        new HtmlWebpackPlugin({ template: paths.html, favicon: path.resolve(paths.public, "redux.svg") }),

        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project)

        }),
        new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: true
        }),
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                memoryLimit: 4096,
                diagnosticOptions: {
                    semantic: true,
                    syntactic: true
                },
                mode: "write-references"
            }
        })
    ];

    if (analyzer) { // npm run build:prod -- --env analyzer
        plugins.push(new BundleAnalyzerPlugin({
            openAnalyzer: true,
            analyzerPort: 8800
        }));
    }

    if (isDev) {
        plugins.push(new webpack.ProgressPlugin());
        plugins.push(new ReactRefreshWebpackPlugin());
        plugins.push(new webpack.HotModuleReplacementPlugin());
    }

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css"
        }));
        plugins.push(new CopyPlugin({
            patterns: [
                { from: paths.locales, to: paths.buildLocales }
            ]
        }));
    }
    return plugins;
}

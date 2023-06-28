import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import {BuildOptions} from "./types/config";

export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
    const {mode, paths, isDev} = options
    return [
        new HtmlWebpackPlugin({template: paths.html}),
        new webpack.ProgressPlugin(),
    ]

}

import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import path from "path";


const config: webpack.Configuration = {
    // mode: "production",
    mode: "development",
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        filename: "bundle.[contenthash].js",
        path: path.resolve(__dirname, "build"),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public', 'index.html')}),
        new webpack.ProgressPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
}

export default config

import webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { type BuildEnv, type BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        build: path.resolve(__dirname, 'build'),
        src: path.resolve(__dirname, 'src'),
        locales: path.resolve(__dirname, 'public', 'locales'),
        buildLocales: path.resolve(__dirname, 'build', 'locales'),
        public: path.resolve(__dirname, 'public'),
    };
    const mode = env?.mode || 'development';
    const isDev = mode === 'development';
    const PORT = env?.port || 3000;
    const apiUrl = env?.apiUrl || 'http://localhost:8000';
    const analyzer = env?.analyzer;

    const config: webpack.Configuration = buildWebpackConfig({
        paths,
        mode,
        isDev,
        port: PORT,
        apiUrl,
        project: 'frontend',
        analyzer,
    });

    return config;
};

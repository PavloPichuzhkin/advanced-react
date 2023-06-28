import {RuleSetRule} from "webpack";

export  function buildLoaders():RuleSetRule[]{
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from js strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
        ]
    }
    const tsLoader={
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    return [
        tsLoader, cssLoader
    ]
}

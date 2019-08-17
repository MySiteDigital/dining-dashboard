const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const devMode = (process.argv.slice().pop() !== 'production');

// Configuration for the ExtractTextPlugin.
const extractConfig = {
    use: [{
            loader: 'raw-loader'
        },
        {
            loader: 'postcss-loader',
            options: {
                plugins: [require('autoprefixer')],
            },
        },
    ],
};

module.exports = {
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    entry: {
        'menu-section-block': './src/menu-section-block/index.js',
    },
    output: {
        path: path.resolve(__dirname) + '/../assets/blocks/',
        filename: devMode ? 'js/[name].js' : 'js/[name].js',
    },
    watch: devMode,
    optimization: {
        minimizer: [
          new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: devMode
          }),
          new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: devMode ? 'css/[name].css' : 'css/[name].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
	                     presets: ["es2015", "stage-3", 'react']
                    }
                },
            },
            {
                test: /\.css?$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS
                ]
            }
        ],
    }
};

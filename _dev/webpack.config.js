const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// webpack.config.js
const config = require("./node_modules/@wordpress/scripts/config/webpack.config");

config.entry = {
  'menu-blocks': './src/menu-blocks/index.js',
  'menu-post-type': './src/menu-post-type/index.js'
}

config.output = {
  path: path.resolve(process.cwd(), '../assets/'),
  filename: 'js/[name].js',
}

config.module.rules = [
  ...config.module.rules,
  {
    test: /\.scss$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          sourceMap: true
        }
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: true
        }
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true
        }
      }
    ]
  },
  {
    test: /\.css?$/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader'
    ]
  }
];

config.plugins = [
  ...config.plugins,
  new MiniCssExtractPlugin({
    filename: 'css/[name].css'
  })
];

config.optimization = {
  minimizer: [
    new OptimizeCSSAssetsPlugin({}),
    new UglifyJsPlugin(),
  ]
}

module.exports = config;
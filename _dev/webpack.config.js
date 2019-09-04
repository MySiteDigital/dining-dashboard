const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// webpack.config.js
const config = require("./node_modules/@wordpress/scripts/config/webpack.config");

config.entry = {
  'menu-section-block': './src/menu-section-block/index.js'
}

config.output = {
  path: path.resolve(process.cwd(), '../assets/blocks/'),
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
    new OptimizeCSSAssetsPlugin({})
  ]
}

module.exports = config;
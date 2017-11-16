const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');

const babel = require('./webpack/babel');
const extractCSS = require('./webpack/css.extract');
const css = require('./webpack/css');
const devServer = require('./webpack/dev-server');
const fonts = require('./webpack/fonts');
const images = require('./webpack/images');
const uglifyJS = require('./webpack/js.uglify');
const sass = require('./webpack/sass');

const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
};

const common = merge([
  {
    entry: {
      app: `${PATHS.source}/index.jsx`,
    },

    output: {
      path: PATHS.build,
      filename: '[name].bundle.js',
    },

    devtool: 'cheap-module-source-map',

    plugins: [
      new webpack.NoEmitOnErrorsPlugin(),
      new CleanWebpackPlugin(PATHS.build),
      new HtmlWebpackPlugin({
        title: 'WR3',
        template: `${PATHS.source}/index.ejs`,
        inject: 'body',
        hash: true,
        cache: true,
        chunks: ['app', 'common'],
      }),

      new webpack.optimize.CommonsChunkPlugin({
        name: 'common',
      }),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
    ],
  },
  fonts(),
  babel(),
  images(),
]);

module.exports = env =>
  (env === 'production' ?
    merge([common, extractCSS(), uglifyJS()])
    :
    merge([common, devServer(), sass(), css()]));


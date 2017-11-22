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

const isProd = process.env.NODE_ENV === 'production';

const PATHS = {
  source: path.join(__dirname, 'source'),
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

    resolve: {
      extensions: ['.js', '.jsx'],
      modules: ['node_modules', 'app', 'source'],
    },

    plugins: [
      new webpack.NoEmitOnErrorsPlugin(),
      new CleanWebpackPlugin(PATHS.build),
      new HtmlWebpackPlugin({
        title: 'W3R3',
        template: `${PATHS.source}/index.ejs`,
        inject: 'body',
        chunks: ['app', 'common'],
      }),

      new webpack.optimize.CommonsChunkPlugin({
        name: 'common',
        filename: 'common.[hash].js',
        minChunks(module) {
          return module.context && module.context.indexOf('node_modules') >= 0;
        },
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

module.exports = () =>
  (isProd ?
    merge([common, extractCSS(), uglifyJS()])
    :
    merge([common, devServer(), sass(), css()]));

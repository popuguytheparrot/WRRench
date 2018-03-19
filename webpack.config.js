const webpack = require('webpack');
const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const babel = require('./webpack/babel');
const devServer = require('./webpack/dev-server');
const fonts = require('./webpack/fonts');
const images = require('./webpack/images');
const html = require('./webpack/html');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');

const isProd = process.env.NODE_ENV === 'production';

const PATH = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
};

const common = merge([
  {
    entry: {
      app: ['react-hot-loader/patch', './src/index.js'],
    },

    output: {
      path: PATH.build,
      filename: '[name].bundle.js',
      publicPath: '/',
    },

    resolve: {
      extensions: ['.js', '.jsx'],
      modules: ['node_modules'],
    },

    plugins: [
      new HtmlWebPackPlugin({
        template: `${PATH.src}/index.ejs`,
        title: 'WRRench',
        favicon: `${PATH.src}/img/favicon.ico`,
      }),
    ],
  },
  html(),
  babel(),
  fonts(),
  images(),
]);

module.exports = () =>
  (isProd ?
    merge([common, extractCSS()])
    :
    merge([common, { devtool: 'source-map' }, { plugins: new webpack.HotModuleReplacementPlugin() }, devServer(), css()])
  );

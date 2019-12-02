// eslint-disable-next-line import/no-extraneous-dependencies
const { join, resolve } = require('path');

const webpack = require('webpack');
const merge = require('webpack-merge');

const HtmlWebPackPlugin = require('html-webpack-plugin');

const babel = require('./webpack/babel');
const devServer = require('./webpack/dev-server');
const fonts = require('./webpack/fonts');
const images = require('./webpack/images');
const html = require('./webpack/html');
const optimization = require('./webpack/optimization');
const eslint = require('./webpack/eslint');

const isProd = process.env.NODE_ENV === 'production';

const PATH = {
  src: join(__dirname, 'src'),
  build: join(__dirname, 'build')
};

const plugins = [
  new HtmlWebPackPlugin({
    template: `${PATH.src}/index.ejs`,
    title: 'WRRench',
    favicon: `${PATH.src}/img/favicon.ico`
  })
];

const rules = [babel(), html(), fonts(), images(), eslint()];

const common = {
  mode: process.env.NODE_ENV,
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: ['node_modules'],
    alias: {
      app: resolve(__dirname, 'app'),
      components: resolve(__dirname, 'components'),
      src: resolve(__dirname, 'src')
    }
  },
  module: {
    rules
  },
  plugins
};

const prodConf = merge([common, optimization()]);
const devConf = merge([
  common,
  {
    devtool: 'cheap-module-source-map',
    optimization: {
      moduleIds: 'named'
    },
    performance: {
      hints: false
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
  },
  devServer()
]);

module.exports = () => (isProd ? prodConf : devConf);

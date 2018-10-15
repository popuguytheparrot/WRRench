const merge = require('webpack-merge');
const path = require('path');

const webpack = require('webpack');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebPackPlugin = require('clean-webpack-plugin');

const babel = require('./webpack/babel');
const devServer = require('./webpack/dev-server');
const fonts = require('./webpack/fonts');
const images = require('./webpack/images');
const html = require('./webpack/html');

const isProd = process.env.NODE_ENV === 'production';

const PATH = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
};

const common = merge([
  {
    entry: {
      app: ['./src/index.js'],
    },

    output: {
      path: PATH.build,
      filename: 'bundle.[hash].js',
      chunkFilename: '[name].chunk.[hash].js',
      publicPath: '/'
    },

    resolve: {
      extensions: ['.js', '.jsx','.json'],
      modules: ['node_modules'],
      alias: {
        app: path.resolve(__dirname, 'app'),
        components: path.resolve(__dirname, 'components'),
        src: path.resolve(__dirname, 'src'),
      },
    },

    plugins: [
      new HtmlWebPackPlugin({
        template: `${PATH.src}/index.ejs`,
        title: 'WRRench',
        favicon: `${PATH.src}/img/favicon.ico`,
      }),
    ],
  },
  babel(),
  html(),
  fonts(),
  images(),
]);

module.exports = () => (isProd
  ? merge([
    common,
    {
      optimization: {
        minimizer: [
          new UglifyJsPlugin({ parallel: true, exclude: /node_modules/ }),
        ],
      },
    },
    {
      plugins: [new CleanWebPackPlugin('build')],
    },
  ])
  : merge([
    common,
        {
          devtool: 'cheap-module-source-map',
          optimization: {
            namedModules: true
          },
          performance: {
            hints: false
          },
          plugins: [new webpack.HotModuleReplacementPlugin()]
        },
    devServer(),
  ])
);

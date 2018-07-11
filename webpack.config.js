const merge = require('webpack-merge');
const path = require('path');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebPackPlugin = require('clean-webpack-plugin');

const babel = require('./webpack/babel');
const devServer = require('./webpack/dev-server');
const fonts = require('./webpack/fonts');
const images = require('./webpack/images');
const html = require('./webpack/html');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const miniExtractCSS = require('./webpack/mini.css.extract');

const isProd = process.env.NODE_ENV === 'production';

const PATH = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
};

const common = merge([
  {
    mode: process.env.WEBPACK_SERVE ? 'development' : 'production',

    entry: {
      app: ['./src/index.js'],
    },

    output: {
      path: PATH.build,
      filename: '[name].bundle.[hash].js',
    },

    resolve: {
      extensions: ['.js', '.jsx'],
      modules: ['node_modules'],
      alias: {
        app: path.resolve(__dirname, 'app'),
        components: path.resolve(__dirname, 'components'),
        src: path.resolve(__dirname, 'src'),
        img: path.resolve(__dirname, 'src', 'img'),
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
  ? merge([common, miniExtractCSS(), {
    optimization: {
      minimizer: [
        new UglifyJsPlugin({ parallel: true, exclude: /node_modules/ }),
      ],
    },
  }, {
    plugins: [new CleanWebPackPlugin('build'), new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    })],
  }])
  : merge([
    common,
    { devtool: 'source-map' },
    devServer(),
  ])
);

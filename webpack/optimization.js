const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSsrcPlugin = require('optimize-css-assets-webpack-plugin');

const cssnano = require('cssnano');

module.exports = () => ({
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        test: /\.js(\?.*)?$/i,
        exclude: /node_modules/,
        cache: true,
        parallel: true,
        extractComments: true,
        uglifyOptions: {
          compress: {
            unsafe: true,
            inline: true,
            passes: 2,
            keep_fargs: false
          },
          output: {
            beautify: false
          },
          mangle: true
        }
      }),
      new OptimizeCSSsrcPlugin({
        cssProcessor: cssnano,
        cssProcessorOptions: {
          discardComments: {
            removeAll: true
          },
          safe: true
        }
      })
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  }
});

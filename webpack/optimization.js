const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = () => ({
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        test: /\.js(\?.*)?$/i,
        exclude: /node_modules/,
        cache: true,
        parallel: true,
        extractComments: true
      })
    ]
  }
});

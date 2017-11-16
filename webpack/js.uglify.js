const webpack = require('webpack');

module.exports = () => ({
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      parallel: 4,
      sourceMap: true,
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false,
      },
    }),
  ],
});

const TerserPlugin = require('terser-webpack-plugin');

module.exports = () => ({
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: true,
      }),
    ],
    splitChunks: { chunks: 'all' },
  },
});

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = paths => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: paths,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          publicPath: '../',
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.css$/,
        include: paths,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
    ],
  },
  plugins: [new ExtractTextPlugin('css/[name].css')],
});

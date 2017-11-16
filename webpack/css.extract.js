const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCss = new ExtractTextPlugin('./css/[name].css')

module.exports = paths => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: paths,
        use: extractCss.extract({
          // publicPath: '../',
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.css$/,
        include: paths,
        use: extractCss.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
    ],
  },
  plugins: [
    exctractCss,
  ],
});

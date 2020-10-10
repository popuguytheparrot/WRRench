module.exports = (paths) => ({
  test: /\.(sa|sc|c)ss$/,
  include: paths,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        modules: true,
        localIdentName: '[folder]__[local]--[contenthash:base64:5]',
      },
    },
    'sass-loader',
  ],
});

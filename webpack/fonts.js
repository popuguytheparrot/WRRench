module.exports = () => ({
  test: /\.(woff|woff2|eot|ttf|otf)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        publicPath: 'fonts/',
        outputPath: 'fonts/',
      },
    },
  ],
});

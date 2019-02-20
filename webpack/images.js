module.exports = () => ({
  test: /\.(png|svg|jpe?g|gif)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'img/'
      }
    }
  ]
});

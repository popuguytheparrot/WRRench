module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[sha512:hash:base64:7].[ext]',
              outputPath: 'img/',
            },
          },
        ],
      },
    ],
  },
});

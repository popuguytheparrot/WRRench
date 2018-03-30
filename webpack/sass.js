module.exports = paths => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: paths,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
});

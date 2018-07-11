module.exports = paths => ({
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        include: paths,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
});

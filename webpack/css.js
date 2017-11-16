module.exports = paths => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        include: paths,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
});

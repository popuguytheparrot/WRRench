module.exports = () => ({
  test: /\.(js|jsx)$/,
  enforce: 'pre',
  exclude: /node_modules/,
  use: [
    {
      loader: 'eslint-loader',
      options: {
        configFile: `./.eslintrc`,
        emitWarning: true
      }
    }
  ]
});

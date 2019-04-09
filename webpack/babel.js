module.exports = () => ({
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: 'babel-loader'
});

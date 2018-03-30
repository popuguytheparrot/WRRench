module.exports = () => ({
  devServer: {
    historyApiFallback: true,
    hot: true,
    compress: true,
    port: 8080,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
});

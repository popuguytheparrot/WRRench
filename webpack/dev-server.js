module.exports = () => ({
  devServer: {
    contentBase: ['./src/img'],
    historyApiFallback: true,
    hot: true,
    compress: true,
    overlay: true,
    port: 8080,
    publicPath: '/',
    quiet: true,
    clientLogLevel: 'error',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
});

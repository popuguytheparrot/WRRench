module.exports = () => ({
  devServer: {
    contentBase: './build',
    hot: true,
    compress: true,
    port: 8080,
    stats: 'errors-only',
  },
}
);

module.exports = paths => ({
  test: /\.css$/,
  include: paths,
  use: ['style-loader', 'css-loader']
});

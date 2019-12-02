module.exports = () => ({
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: [
          [
            '@babel/preset-env',
            {
              loose: true,
              modules: false,
              targets: {
                node: 'current',
                browsers: ['last 2 versions']
              }
            }
          ],
          '@babel/preset-react'
        ],
        env: {
          production: {
            presets: []
          }
        }
      }
    }
  ]
});

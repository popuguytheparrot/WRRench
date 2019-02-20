module.exports = () => ({
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        plugins: [
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-proposal-export-default-from',
          '@babel/plugin-syntax-dynamic-import',
          '@babel/plugin-proposal-export-namespace-from'
        ],
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

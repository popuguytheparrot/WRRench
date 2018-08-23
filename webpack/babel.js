module.exports = () => ({
  module: {
    rules: [
      {
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
                '@babel/plugin-proposal-export-namespace-from',
              ],
              presets: [
                [
                  '@babel/env',
                  {
                    targets: {
                      node: 'current',
                      browsers: ['last 2 versions'],
                    },
                  },
                ],
                '@babel/react',
              ],
              env: {
                production: {
                  presets: [],
                },
              },
            },
          },
        ],
      },
    ],
  },
});

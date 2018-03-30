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
              presets: [
                [
                  'env',
                  {
                    targets: {
                      node: 'current',
                      browsers: ['last 2 versions'],
                    },
                  },
                ],
                'react',
                'stage-1',
              ],
              env: {
                production: {
                  presets: ['react-optimize'],
                },
              },
            },
          },
        ],
      },
    ],
  },
});

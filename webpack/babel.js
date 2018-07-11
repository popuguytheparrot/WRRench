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
                  '@babel/env',
                  {
                    targets: {
                      node: 'current',
                      browsers: ['last 2 versions'],
                    },
                  },
                ],
                '@babel/react',
                ['@babel/preset-stage-1', { decoratorsLegacy: true, pipelineProposal: "minimal" }],
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

module.exports = function(api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        modules: false,
        loose: true
      }
    ],
    '@babel/preset-react'
  ];
  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-export-namespace-from'
  ];

  return {
    presets,
    plugins
  };
};

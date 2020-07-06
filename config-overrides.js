// eslint-disable-next-line import/no-extraneous-dependencies
const { override, addBabelPlugins, } = require('customize-cra');

export default override(
  ...addBabelPlugins([
    'babel-plugin-root-import',
    {
      rootPathPrefix: '~',
      rootPathSuffix: 'src',
    },
  ])
);

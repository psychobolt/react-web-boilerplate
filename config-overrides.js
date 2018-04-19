const rewireLodash = require('react-app-rewire-lodash')
const rewireStyledComponents = require('react-app-rewire-styled-components');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');

module.exports = function override(config, env) {
  config = rewireLodash(config, env, { id: ['lodash', 'recompose'] });
  config = rewireStyledComponents(config, env);
  config = rewireReactHotLoader(config, env);
  return config;
};
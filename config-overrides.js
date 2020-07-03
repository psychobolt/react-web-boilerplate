const {
  override, useBabelRc, useEslintRc, addWebpackPlugin,
} = require('customize-cra');
const StylelintPlugin = require('stylelint-webpack-plugin');

const isDevMode = process.env.NODE_ENV === 'development';

const configureESLintOptions = options => config => {
  const eslintRule = config.module.rules.filter(
    r => r.use && r.use.some(u => u.options && u.options.useEslintrc !== void 0), // eslint-disable-line no-void,max-len
  )[0];

  eslintRule.use = eslintRule.use
    .map(usage => (usage.loader.match(/eslint-loader/)
      ? ({
        ...usage,
        options: {
          ...usage.options,
          ...options,
        },
      })
      : usage
    ));

  const rules = config.module.rules.map(r => (
    r.use && r.use.some(u => u.options && u.options.useEslintrc !== void 0) // eslint-disable-line no-void
      ? eslintRule
      : r
  ));
  config.module.rules = rules;

  return config;
};

module.exports = {
  jest: config => ({
    ...config,
    transformIgnorePatterns: ['node_modules/(?!(hashids)/)'],
    collectCoverageFrom: [
      'src/**/*.js',
      '!src/**/*.(i18n|state|style|theme).js',
      '!**/index.js',
      '!src/shared/**/*.js',
      '!src/(registerServiceWorker|reducer).js',
    ],
  }),
  babel: override(useBabelRc()),
  webpack: override(
    useEslintRc(),
    addWebpackPlugin(new StylelintPlugin({
      files: ['src/**/*.s?(a|c)ss]', 'src/**/*.(component|style).js'],
      emitWarning: isDevMode,
    })),
    configureESLintOptions({
      emitWarning: isDevMode,
    }),
  ),
};

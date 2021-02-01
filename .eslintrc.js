/* eslint-disable quote-props */

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'curly': ['warn', 'multi-line'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': ['warn'],
    'object-curly-spacing': ['warn', 'never'],
    'vue/no-unused-components': ['warn'],
    'vue/no-unused-vars': ['warn']
  }
}

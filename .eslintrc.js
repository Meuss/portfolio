module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['plugin:vue/essential', 'plugin:prettier/recommended'],
  // required to lint *.vue files
  plugins: ['vue', 'prettier'],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'max-len': ['error', { code: 200 }],
    semi: [2, 'always'],
    quotes: ['error', 'single'],
    'vue/max-attributes-per-line': 'off',
    'prettier/prettier': ['error', { semi: true, trailingComma: 'all', singleQuote: true, printWidth: 200 }],
  },
};

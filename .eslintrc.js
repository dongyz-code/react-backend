module.exports = {
  env: {
    node: true,
    es6: true
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'react-app',
    'react-app/jest',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier'
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'no-debugger': 'off'
  },
  globals: {}
}

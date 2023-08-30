/* eslint-env node */

module.exports = {
  root: true,
  env: { node: false, browser: true, commonjs: false, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
    ecmaFeatures: {
      tsx: true
    },
    requireConfigFile: false
  },
  settings: { react: { version: '18.2.14' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    'react-hooks/exhaustive-deps': 0,
    'handle-callback-err': 2,
    'no-debugger': 2,
    'no-fallthrough': 2,
    'eol-last': 1,
    'no-irregular-whitespace': 1,
    'no-mixed-spaces-and-tabs': [1, 'smart-tabs'],
    'no-trailing-spaces': 1,
    'no-new-require': 2,
    'no-undef': 0,
    'no-unreachable': 2,
    'no-unused-vars': [
      0,
      {
        vars: 'all',
        args: 'none'
      }
    ],
    'no-console': 1,
    'new-cap': 0,
    'max-len': [2, 500, 4],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'ignore',
        named: 'never',
        asyncArrow: 'ignore'
      }
    ]
  }
}

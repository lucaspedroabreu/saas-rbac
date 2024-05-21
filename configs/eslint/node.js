// @ts-check

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: ['eslint:recommended', 'prettier', 'eslint-config-turbo'],
  plugins: ['eslint-simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
  },
  env: {
    node: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js?(x)', '.ts?(x)'],
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    '.*.js',
    'node_modules/',
    'dist/',
  ],
  overrides: [{ files: ['*.js?(x)', '*.ts?(x)'] }],
}

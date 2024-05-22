/** @type {import("eslint").Linter.Config} */
module.exports = {
    extends: ['eslint:recommended', 'prettier', 'eslint-config-turbo'],
    globals: {
        React: true,
        JSX: true,
    },
    env: {
        node: true,
    },
    rules: {
        'simple-import-sort/imports': 'error',
        'semi': 'error',
    },
    ignorePatterns: [
        // Ignore dotfiles
        'node_modules/',
        'dist/',
    ],
    overrides: [
        {
            files: ['*.js?(x)', '*.ts?(x)'],
        },
    ],
}

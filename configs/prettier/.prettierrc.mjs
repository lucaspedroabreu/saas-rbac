/**
 * @type {import('prettier').Options}
 */
const config = {
    plugins: ['prettier-plugin-tailwindcss'],
    semi: true, // Add semicolons at the end of statements
    trailingComma: 'es5', // Add trailing commas wherever possible
    singleQuote: true, // Use single quotes for strings
    printWidth: 80, // Specify the maximum line length before code is wrapped
    tabWidth: 4, // Specify the number of spaces per indentation-level
    useTabs: false,
    quoteProps: 'consistent',
    bracketSpacing: true,
    endOfLine: 'auto',
    bracketSameLine: false,
    jsxSingleQuote: false,
    arrowParens: 'always', // Control parentheses around single arrow function parameters
    overrides: [
        {
            files: '*.json',
            options: {
                tabWidth: 2, // Use 2 spaces for indentation in JSON files
            },
        },
    ],
};

export default config;

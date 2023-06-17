module.exports = {
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:perfectionist/recommended-natural',
        'plugin:astro/recommended',
        'plugin:astro/jsx-a11y-recommended', // could be strict instead of recommended
        // "plugin:react/recommended",
        // "plugin:@typescript-eslint/eslint-recommended",
        'prettier',
    ],
    overrides: [
        {
            // Define the configuration for `.astro` file.
            files: ['*.astro'],
            // Allows Astro components to be parsed.
            parser: 'astro-eslint-parser',
            // Parse the script in `.astro` as TypeScript by adding the following configuration.
            // It's the setting you need when using TypeScript.
            parserOptions: {
                extraFileExtensions: ['.astro'],
                parser: '@typescript-eslint/parser',
            },
            rules: {
                'astro/no-set-html-directive': 'error',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
    },
    rules: {
        'jsx-a11y/no-onchange': 'off',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};

module.exports = {
  extends: [
    "plugin:perfectionist/recommended-natural",
    'plugin:astro/recommended',
    'plugin:astro/jsx-a11y-recommended', // could be strict instead of recommended
    // "plugin:react/recommended",
    // "plugin:@typescript-eslint/eslint-recommended",
    "prettier"
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
        // override/add rules settings here, such as:
        'astro/no-set-html-directive': 'error',
      },
    },
  ],
};

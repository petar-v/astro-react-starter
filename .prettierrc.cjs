module.exports = {
    "plugins": [require.resolve('prettier-plugin-astro')],
    "singleQuote": true,
    "overrides": [
        {
            "files": ["*.astro"],
            "options": {
                "parser": "astro"
            }
        }
    ]
};

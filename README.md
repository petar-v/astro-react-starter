# Astro react starter

This is a starter I built for myself that has React, SASS, and a bunch of other
sane (to myself) defaults and instruments. This is meant to get me started on
super quickly building a new project without having to setup all that every time.

### 🖥️Local setup

After successfully installing those dependencies, open this template with any IDE [[VS Code](https://code.visualstudio.com/) recommended], and then open the internal terminal of IDM [vs code shortcut <code>ctrl/cmd+\`</code>]

-   👉Install dependencies

```
yarn install
```

-   👉Run locally

```
yarn dev
```

## 🐕🐶 Pre-commit hooks

For pre-commit hooks, this project uses Husky. In order to set it up, you need to run the following command only initially:

```
yarn prepare

```

After that, it will open up a preview of the template in your default browser, watch for changes to source files, and live-reload the browser when changes are saved.

## 🔨Production Build

After finishing all the customization, you can create a production build by running this command.

```
yarn build
```

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Card.astro
│   │   └── GlassCounter.tsx
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `yarn install`         | Installs dependencies                            |
| `yarn dev`             | Starts local dev server at `localhost:3000`      |
| `yarn build`           | Build your production site to `./dist/`          |
| `yarn preview`         | Preview your build locally, before deploying     |
| `yarn astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `yarn astro -- --help` | Get help using the Astro CLI                     |
| `yarn lint`            | Run eslint                                       |
| `yarn stylelint`       | Run style linting                                |
| `yarn prettify`        | Run prettier and apply style fixes               |

## 📦️ Dependencies and instruments added

-   @astrojs/mdx
-   @astrojs/image
-   @astro-icon
-   @astro-sitemap
-   React
-   Tailwind
-   Prettier
-   Eslint
-   Stylelint
-   SASS
-   Husky
-   And more...

## 👀 Want to learn more?

Feel free to check [Astro's documentation](https://docs.astro.build).

Also, feel free to google shit or ask Pesho.

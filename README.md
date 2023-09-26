# Advanced React

### It is my pet project to try new technologies, libraries, tools, etc.

Project available on https://fascinating-pothos-65afbd.netlify.app/

You can log in with different usernames and different roles to test it:

* Admin role: username `admin`, pass `123`.
* User role: username `user1`, pass `123`.
* Manager role: username `manager`, pass: `123`.
* Super-admin role: username `sadmin`, pass: `123`.

### Architectural design methodology

Project developed with [Feature-Sliced Design (FSD)](https://feature-sliced.design/) methodology.

### To start

* `npm install --force` - install dependencies.
* `npm run start:dev` - starts frontend (with Webpack) and server. 
* `npm run start:dev:vite` - starts frontend (with Vite) and server.

### Scripts

#### Start and build

* `npm run start` - run frontend with Webpack on http://localhost:3003/
* `npm run start:dev` - run backend + frontend with Webpack
* `npm run start:vite` - run frontend with Vite on http://localhost:5173/
* `npm run start:dev:vite` - run backend + frontend with Vite
* `npm run start:dev:server` - run backend on http://localhost:8000/
* `npm run build:dev` - build in dev mode
* `npm run build:prod` - build in prod mode

#### Linting

* `npm run lint:ts` - check TS files with ESLint
* `npm run lint:ts:fix` - fix TS files with ESLint
* `npm run lint:scss` - check scss files with Stylelint
* `npm run lint:scss:fix` - fix scss files with Stylelint

#### Storybook

* `npm run start:storybook` - run storybook on http://localhost:6006/
* `npm run storybook:build` - create storybook build

#### Testing

* `npm run test:unit` - run unit tests with Jest
* `npm run test:ui` - run screenshot tests with Loki (storybook should be started)
* `npm run test:ui:ok` - approve screenshot test with Loki
* `npm run test:ui:ci` - run screenshot tests with Loki in CI
* `npm run test:ui:report` - generate full report for screenshot testing
* `npm run test:ui:json` - generate json report for screenshot testing
* `npm run test:ui:html` - generate HTML report for screenshot testing

#### Tools
 
* `npm run generate:slice` - script for creating FSD slice

---

### Features

* Custom FSD slice generator with node.js.
* Custom babel plugin babelRemovePropsPlugin.
* Custom own ESLint plugin: [eslint-plugin-project-fsd-architecture](https://www.npmjs.com/package/eslint-plugin-project-fsd-architecture).
* Code splitting.
* Async reducers.
* Async libraries import.
* Custom refactoring tools with [ts-morph](https://ts-morph.com/): scripts/refactAutomation.
* Supported `En` and `Uk` translations with [i18next](https://www.i18next.com/) library.

---

### Configuration

Project has 2 configs:

* Webpack - `config/build`
* Vite - `vite.config.js`

Both bundlers adapted for all apps features.

Configuration is in `config`:

* `config/babel` - babel config
* `config/build` - webpack config
* `config/jest` - jest config
* `config/storybook` - storybook config

Folder `scripts` stored different scripts for refactoring code, create slice, generate reports, etc.

___

### Tests

In project implemented 4 types of tests:

* Unit tests with [Jest](https://jestjs.io/) - `npm run test:unit`
* Component tests with [React Testing Library](https://testing-library.com/) - `npm run test:unit`
* Screenshot testing with [Loki](https://github.com/oblador/loki) - `npm run test:ui`
* e2e testing with [Cypress](https://www.cypress.io/) - `npm run test:e2e` - not implemented yet

---

### Linting

The project uses ESLint to check typescript code and Stylelint to check styles code.

To control the main design principles of FSD, I use my own custom ESLint
plugin [eslint-plugin-project-fsd-architecture](https://www.npmjs.com/package/eslint-plugin-project-fsd-architecture) with 3
rules:

* `slice-imports-validation` - Checks imports within a module and forbids using absolute imports.
* `public-api-imports-validation` - Checks imports from other modules (allowed only from the public API). Has auto fix.
* `layer-imports` - Checks imports from higher layer into layer below.

---

### CI pipeline and pre-commit hooks

Config for GitHub Actions in `.github/workflows`. CI used to run linters, tests, build
project and storybook, upload unit & screenshot reports to GitHub Pages.

Pre-commit hooks check code with linters.

---

### Work with data

Interaction with data is done with [redux toolkit](https://redux-toolkit.js.org/). When possible, reused entities should be normalized with [EntityAdaptor](https://redux-toolkit.js.org/api/createEntityAdapter).

Server requests are sent with [RTK query](https://redux-toolkit.js.org/rtk-query/overview)

For adding async reducers used [DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

---

### Storybook

For each component is created story-case.

Request on server mocked with [Mock Service Worker](https://mswjs.io/) & [msw-storybook-addon](https://storybook.js.org/addons/msw-storybook-addon).

File with story-cases is created near the component with extension `.stories.tsx`.

___

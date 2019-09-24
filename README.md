# Create Carvana React App

## Table of Contents

- [Getting Started](#getting-started)
- [Cleaning Up the Project](#cleaning-up-the-project)
- [Unit Testing](#unit-testing)
- [Interactive End to End Testing](#interactive-end-to-end-testing)
- [CI End to End Testing](#ci-end-to-end-testing)
- [Building the Project](#building-the-project)
- [Running the Server](#running-the-server)
- [Viewing the Theme](#viewing-the-theme)
- [Contributing](#contributing)

## Getting Started

### Installation
  From the root of this project:

```
  npm install
```

### Development Server

```
  npm run start:dev
```

* `start:dev` runs the project in development mode, using .env.development
* `start:test` runs the project in test mode, using .env.test
* `start:uat` runs the project in uat mode, using .env.uat
* `start:prod` runs the project in prod mode, using .env.prod

## Cleaning Up the Project
After you have familiarized yourself with the project structure, you should make the following modifications:
1. Delete `counter_home.spec.js`
2. Delete all folders that begin with `DELETEME-`
3. In the store folder, change both `initialState.js` as well as `rootReducer.js`
4. Remove the reference to Layout in `App.js`
5. Delete any keys in the .env.* files that you are not using

## Unit Testing
You can find more information on Jest tests [here](https://jestjs.io/)
```
  npm run test
```

Examples:
* Redux tests: `src/components/Counter/ducks/__tests__`
* Component tests: `src/components/Counter/__tests__`

## Interactive End to End Testing
You can find more information on Cypress testing [here](https://www.cypress.io/)
```
  npm run cypress:open
```
Examples:
* Cypress tests: `cypress/integration`

## CI End to End Testing
To run your tests in a CI environment (like VSTS builds):

```
  npm run cypress:ci:dev
```

`Note`: the same commands are available for all environments (`test` | `uat` | `prod`)

## Building the Project
When you need the project built to the `build` folder:

```
  npm run build:dev
```
`Note`: the same commands are available for all environments (`test` | `uat` | `prod`)

## Running the Server
To run the server (non-interactively):
```
  npm run server
```

## Viewing the Theme
Carvana has a specific theme, which you can view [here](./node_modules/@carvana/theme/ThemeProvider/ThemeProvider.js).
Contributions to theme can be made through [Carvana.Showroom](https://carvanadev.visualstudio.com/Carvana.Projects/_git/Carvana.Showroom).


## Contributing

Templates are Carvana open source code and all are welcome to modify and create a pull request for their changes.

To make modifications, read the [README.md](../README.md) at the root of `@carvana/templates`


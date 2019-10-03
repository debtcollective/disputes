# Dispute Tools Frontend

## Stack and Libraries

- [Node.js](https://nodejs.org/)
- [Next.js](https://nextjs.org/)
- [Apollo Client](https://github.com/apollographql/apollo-client)

# Setup

## Dotenv

Run `cp .env.sample .env` and replace the values with your specific configuration.

# Usage

`yarn start` will run the project in development mode.

# Tests

## Jest

`yarn test` will run tests. We are using Jest for tests

## Cypress

We are using [Cypress](https://www.cypress.io/) for our integration testing.

To run tests in the terminal

```bash
yarn test:cypress
```

To run tests with GUI

```bash
yarn cypress open
```

# Notes

In order to satisfy all the needs of the project, there is some custom code on top of the tecnologies we use that will be further described in [our guide](./docs/GUIDE.md)

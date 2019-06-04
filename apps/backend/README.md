# Back-end

## Setup

### Database

We are using Objection.js as our ORM and Knex needs to be configurated to work with it.

We are using safe defaults and environment variables for production/staging deployments.

You need to create databases for development and test environment. Run these commands

```
createdb disputes_development
createdb disputes_test
```

## Usage

`yarn start` will run the project in development mode.

## Tests

`yarn test` will run tests. We are using Jest for tests

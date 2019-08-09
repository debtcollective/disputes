# Dispute Tools Backend

## Setup

### Database

We are using Objection.js as our ORM and Knex needs to be configurated to work with it.

First, run `cp .env.sample .env` and replace the values with your specific configuration.

You need to create databases for development and test environment, you can do that by running these commands.

```bash
createdb disputes_development
createdb disputes_test
```

Now you run migrations with

```bash
yarn db:migrate
```

## Usage

`yarn start` will run the project in development mode.

## Tests

`yarn test` will run tests. We are using Jest for tests

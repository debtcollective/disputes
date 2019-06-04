# Back-end

## Setup

### Database

We are using Objection.js as our ORM and Knex needs to be configurated to work with it.

First, run `cp knexfile.sample.js knexfile.js` to copy the Knex default configuration file. Then modify the file as needed with your Postgres configuration.

You need to create databases for development and test environment, you can do that by running these commands.

```bash
createdb disputes_development
createdb disputes_test
```

## Usage

`yarn start` will run the project in development mode.

## Tests

`yarn test` will run tests. We are using Jest for tests

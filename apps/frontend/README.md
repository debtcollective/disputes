# Dispute Tools

[![Build Status](https://travis-ci.org/debtcollective/disputes.svg?branch=master)](https://travis-ci.org/debtcollective/disputes)
[![codecov](https://codecov.io/gh/debtcollective/disputes/branch/master/graph/badge.svg)](https://codecov.io/gh/debtcollective/disputes)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)

## How to install

Install it and run:

```bash
yarn
yarn dev
```

## Run Tests

```bash
yarn test
```

## Run Cypress

We are using [Cypress](https://www.cypress.io/) for our integration testing. You can run it with:

```bash
yarn test:cypress
```

That will run the tests in the terminal. If you prefer to run Cypress with GUI use:

```bash
yarn cypress open
```

## Things you need to know

In order to satisfy all the needs of the project, there is some custom code on top of the tecnologies we use that will be further described in [our guide](./docs/GUIDE.md)

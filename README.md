# Dispute Tools

[![CircleCI](https://circleci.com/gh/debtcollective/disputes.svg?style=svg)](https://circleci.com/gh/debtcollective/disputes)
[![codecov](https://codecov.io/gh/debtcollective/disputes/branch/master/graph/badge.svg)](https://codecov.io/gh/debtcollective/disputes)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)

## Project structure

This repository is a monorepo that uses [Lerna](https://github.com/lerna/lerna). It is structured the following way:

```bash
apps/
├── frontend/ # Next.js React Apollo app
├── tools/    # Dispute tools JSON schema package
```

We don't publish `frontend` to npm since is marked as `private: true` in `package.json`. Only packages are published under @debtcollective in NPM.

## Installation

To get started run:

```bash
yarn global add lerna
lerna bootstrap
```

You can then run each application in a new Terminal to have better control of it.

Go to the README.md of each app for usage information.

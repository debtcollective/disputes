# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.7.0](https://github.com/debtcollective/disputes/compare/v0.6.0...v0.7.0) (2019-05-25)


### Features

* add Wage Garnishment type D, E to index ([56fc18d](https://github.com/debtcollective/disputes/commit/56fc18d))
* **wage:** add doe-privacy-release property to all forms ([27256ec](https://github.com/debtcollective/disputes/commit/27256ec))
* **wage:** add type C using atb form from past definitions ([dcb4379](https://github.com/debtcollective/disputes/commit/dcb4379))
* **wage:** add type D using "atb Disqualifying Form" from previous def ([c81dc49](https://github.com/debtcollective/disputes/commit/c81dc49))
* **wage:** add type E form using "Unauthorized Signature Form" from previous definition ([66f4f80](https://github.com/debtcollective/disputes/commit/66f4f80))
* **wage:** Add Wage Garnishment Dispute type A and type B ([34bd56c](https://github.com/debtcollective/disputes/commit/34bd56c)), closes [#10](https://github.com/debtcollective/disputes/issues/10)





# [0.6.0](https://github.com/debtcollective/disputes/compare/v0.5.0...v0.6.0) (2019-05-24)


### Bug Fixes

* **deps:** update dependency @debtcollective/header to v1.6.1 ([3f07a00](https://github.com/debtcollective/disputes/commit/3f07a00))


### Features

* **CheckField:** add support for group of items mapping ui:widget ([9f596c7](https://github.com/debtcollective/disputes/commit/9f596c7))
* **FieldTemplate:** add base to rendeer RadieField component on specific case ([4134aaf](https://github.com/debtcollective/disputes/commit/4134aaf))
* **RadioField:** add component to handle radio widget as Material UI ([1cbfa1a](https://github.com/debtcollective/disputes/commit/1cbfa1a))
* **RadioField:** add support for default value declaration ([d368662](https://github.com/debtcollective/disputes/commit/d368662))
* **RadioField:** allow to trigger changes on form data ([98acf20](https://github.com/debtcollective/disputes/commit/98acf20))
* **schemas:** add Credit Report schema ([85cad6d](https://github.com/debtcollective/disputes/commit/85cad6d))
* **yesno:** allow to pass extra details to the root definition instead just title ([62355c2](https://github.com/debtcollective/disputes/commit/62355c2))
* **yesno:** allow to receive a defaultValue to render ([7eed682](https://github.com/debtcollective/disputes/commit/7eed682))





# [0.5.0](https://github.com/debtcollective/disputes/compare/v0.4.0...v0.5.0) (2019-05-20)


### Bug Fixes

* **tax:** render radio widgets on type C definition of yesno ([c5cdddc](https://github.com/debtcollective/disputes/commit/c5cdddc))


### Features

* **FieldTemplate:** allow to render built-in components when ui:widget has value ([db1d6e2](https://github.com/debtcollective/disputes/commit/db1d6e2))
* **index:** add link to dispute taxes type E ([31b9137](https://github.com/debtcollective/disputes/commit/31b9137))
* **pages:** add taxes dispute pages for type B and C ([5de63f6](https://github.com/debtcollective/disputes/commit/5de63f6))
* **tax:** add "atb-entrance-exam-radio-option" and "atb-entrance-exam-improper-group" yesno ([2aaf71c](https://github.com/debtcollective/disputes/commit/2aaf71c)), closes [#9](https://github.com/debtcollective/disputes/issues/9)
* **tax:** add "atbd-option" support for "other" selection (Type C) ([a263d0e](https://github.com/debtcollective/disputes/commit/a263d0e))
* **tax:** add atb-remedial-program-completed and atb-received-ged to type C ([ea0ce9d](https://github.com/debtcollective/disputes/commit/ea0ce9d))
* **tax:** add base structure for schema type D ([d4e09b2](https://github.com/debtcollective/disputes/commit/d4e09b2))
* **tax:** add branch for type C prop "atb-entrance-exam-group" ([756a7c7](https://github.com/debtcollective/disputes/commit/756a7c7))
* **tax:** add explicit schema for radio button on atb-have-ged ([21fa9e6](https://github.com/debtcollective/disputes/commit/21fa9e6))
* **tax:** add first branch for yesno within type C ([5ad35d6](https://github.com/debtcollective/disputes/commit/5ad35d6))
* **tax:** add page to hold type D schema ([e6ced2d](https://github.com/debtcollective/disputes/commit/e6ced2d))
* **tax:** add Type E schema ([a433de2](https://github.com/debtcollective/disputes/commit/a433de2))
* **tax:** fix schema definition for multiple choice on "atbd-option" ([02448a8](https://github.com/debtcollective/disputes/commit/02448a8))
* **tax:** minor fix on type C definition ([c305a7b](https://github.com/debtcollective/disputes/commit/c305a7b))
* **tax:** solve branch for 'atbd-reason-not-to-benefit' using yesno factory ([8ab2276](https://github.com/debtcollective/disputes/commit/8ab2276))
* **tax:** Type E add checkboxes UI definition for fc-documents ([25e822f](https://github.com/debtcollective/disputes/commit/25e822f))
* **yesno:** add default value to yesno factory ([d1dfa04](https://github.com/debtcollective/disputes/commit/d1dfa04))
* **yesno:** add factory to create schema for branched yesno questions across the app ([0453169](https://github.com/debtcollective/disputes/commit/0453169))





# [0.4.0](https://github.com/debtcollective/disputes/compare/v0.3.0...v0.4.0) (2019-05-19)


### Bug Fixes

* **PlainTemplate:** avoid to duplicate information for Object properties ([32c69b7](https://github.com/debtcollective/disputes/commit/32c69b7))


### Features

* **CheckField:** add new component to map checkboxes ([cb08578](https://github.com/debtcollective/disputes/commit/cb08578)), closes [#9](https://github.com/debtcollective/disputes/issues/9)
* **DateField:** allow DateField to show year on the visible value ([cf5bcc4](https://github.com/debtcollective/disputes/commit/cf5bcc4))
* **DateField:** use label values to add placeholder within UI ([7f25f02](https://github.com/debtcollective/disputes/commit/7f25f02))
* **disputes:** add personal info lib file to be shared across form templates ([f707662](https://github.com/debtcollective/disputes/commit/f707662))
* **NumberField:** allow to use format prop to render currency or phone based input ([6e176f6](https://github.com/debtcollective/disputes/commit/6e176f6))
* **pages:** add new page for taxe type 'A' disputes ([1ebeb86](https://github.com/debtcollective/disputes/commit/1ebeb86)), closes [#9](https://github.com/debtcollective/disputes/issues/9)
* **tax:** add missing definition for school information ([43aa8df](https://github.com/debtcollective/disputes/commit/43aa8df))
* **tax:** add required properties to type a form ([848b8c6](https://github.com/debtcollective/disputes/commit/848b8c6))
* **tax:** add ui order for type a root properties ([e483ea8](https://github.com/debtcollective/disputes/commit/e483ea8))
* **tax:** Allow to ask for more info for FFEL Holders ([446a044](https://github.com/debtcollective/disputes/commit/446a044))





# [0.3.0](https://github.com/debtcollective/disputes/compare/v0.2.0...v0.3.0) (2019-05-15)


### Bug Fixes

* **now:** reverting now.json ([acaa3bf](https://github.com/debtcollective/disputes/commit/acaa3bf))
* change process.CYPRESS_PORT to process.env.CYPRESS_PORT ([644a0a6](https://github.com/debtcollective/disputes/commit/644a0a6))


### Features

* **cypress:** add example test and eslint config ([f1d184d](https://github.com/debtcollective/disputes/commit/f1d184d))





# [0.2.0](https://github.com/debtcollective/disputes/compare/v0.1.0...v0.2.0) (2019-05-14)


### Bug Fixes

* **deps:** pin dependencies ([24227a5](https://github.com/debtcollective/disputes/commit/24227a5))
* **deps:** update dependency graphql to v14.3.0 ([c3639c0](https://github.com/debtcollective/disputes/commit/c3639c0))
* **deps:** update dependency react-number-format to v4.0.8 ([8d5768c](https://github.com/debtcollective/disputes/commit/8d5768c))


### Features

* **disputes:** Add base to render plain form for general debt ([46a4716](https://github.com/debtcollective/disputes/commit/46a4716))
* **NumberField:** add new component to handle currency values ([0d07da7](https://github.com/debtcollective/disputes/commit/0d07da7))
* **TextField:** add base to being able to inject improved date picker UI ([99b77bc](https://github.com/debtcollective/disputes/commit/99b77bc))
* add Header component ([a10b048](https://github.com/debtcollective/disputes/commit/a10b048))





# [0.1.0](https://github.com/debtcollective/disputes/compare/v0.0.3...v0.1.0) (2019-05-07)


### Features

* add husky and pretty-quick packages ([1bbe722](https://github.com/debtcollective/disputes/commit/1bbe722))





## [0.0.3](https://github.com/debtcollective/disputes/compare/v0.0.2...v0.0.3) (2019-04-24)

**Note:** Version bump only for package @debtcollective/disputes-frontend





## [0.0.2](https://github.com/debtcollective/disputes/compare/v0.0.1...v0.0.2) (2019-04-24)

**Note:** Version bump only for package @debtcollective/disputes-frontend





## 0.0.1 (2019-04-24)

**Note:** Version bump only for package @debtcollective/disputes-frontend

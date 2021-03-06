# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.4.0-beta.0](https://github.com/bolt-design-system/bolt/compare/v2.3.0...v2.4.0-beta.0) (2019-04-16)


### Bug Fixes

* add update autolink click tests to make sure we're waiting for the new page to finish loading before continuing to run checks. https://checklyhq.com/docs/browser-checks/timeouts/#page-waitfornavigation ([f3f5059](https://github.com/bolt-design-system/bolt/commit/f3f5059))
* ensure every autolink test has a high enough timeout ([ea83ca0](https://github.com/bolt-design-system/bolt/commit/ea83ca0))
* re-test Jest after tweaking logic used to make sure the config data needed is available ([f808965](https://github.com/bolt-design-system/bolt/commit/f808965))
* update autolink tests to ensure every button on Travis CI updates. ([32186a8](https://github.com/bolt-design-system/bolt/commit/32186a8))
* update jest tests to auto-exclude test data files in nested folders + rename autolink test configs to have a `.data.js` file extension used to exclude from Jest ([ad70e08](https://github.com/bolt-design-system/bolt/commit/ad70e08))
* update max timeout for autolinker tests ([b00b45b](https://github.com/bolt-design-system/bolt/commit/b00b45b))


### Features

* add comprehensive testing coverage to confirm config options + integrations working as expected ([103f37a](https://github.com/bolt-design-system/bolt/commit/103f37a))
* add initial `@bolt/analytics-autolink` implementation ([d05bc98](https://github.com/bolt-design-system/bolt/commit/d05bc98))
* add README.md docs for installing and implementing ([78b5f37](https://github.com/bolt-design-system/bolt/commit/78b5f37))

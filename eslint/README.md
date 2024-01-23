# `eslint-config-henrik`

These are my shared eslint config files.

### Entrypoints

All configs have the prettier override plugin, since this eslint config is designed to be used with my prettier config.

#### `henrik`

These are my base rules for Typescript, which also includes the prettier reset.

#### `henrik/react`

This includes the base Typescript rules along with general JSX linting and rules of hooks. Since I use tailwind css a lot, it also includes the linting plugin for that.


#### `henrik/next`

This includes the base Typescript rules, React config, as well as the `next/core-web-vitals` config.

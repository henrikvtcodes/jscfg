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

### How to use

**Install**

```sh
# pnpm
pnpm add -D eslint eslint-config-henrik @typescript-eslint/parser
# Bun
bun add -d eslint eslint-config-henrik @typescript-eslint/parser
```

`.eslintrc.cjs`

```js
/** @type {import('eslint').Linter.Config} */
module.exports = {
  // Pick one of these
  extends: ["henrik", "henrik/react", "henrik/next"],
  parser: "@typescript-eslint/parser",
  // rest of your config
};
```

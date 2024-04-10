# jscfg

These are my shared configs for JS/TS tooling. At the moment, it only contains configs for:

- Eslint ([Config](/eslint/README.md))
- Prettier ([Config](/prettier/README.md))
- Typescript ([Config](/tsconfig/README.md))

## Installing Everything

```sh
# pnpm
pnpm add -D prettier prettier-config-henrik eslint eslint-config-henrik @typescript-eslint/parser tsconfig-henrik
# Bun
bun add -d prettier prettier-config-henrik eslint eslint-config-henrik @typescript-eslint/parser tsconfig-henrik
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

`prettier.config.mjs`

```js
import sharedConfig from "prettier-config-henrik";

const config = {
  ...sharedConfig,
  // your config here
};

export default config;
```

`tsconfig.json`

```json
{
  "extends": "tsconfig-henrik/base.json"
  // rest of config
}
```

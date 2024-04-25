# prettier-config-henrik

### How to use

**Installation**

```sh
# pnpm
pnpm add -D prettier prettier-config-henrik
# Bun
bun add -d prettier prettier-config-henrik
```

**Usage**

```js
import sharedConfig from "prettier-config-henrik";

const config = {
  ...sharedConfig,
  // Make sure to set your TS version!
  importOrderTypeScriptVersion: "5.4.5",
  // your config here
};

export default config;
```

Import Order Plugin Config: [ianvs/prettier-plugin-sort-imports](https://github.com/IanVS/prettier-plugin-sort-imports/blob/main/README.md)

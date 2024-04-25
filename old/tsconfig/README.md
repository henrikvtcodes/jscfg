# Typescript Config

This contains my preferred typescript config.

## How to Use

**Install**

```sh
# pnpm
pnpm add -D typescript tsconfig-henrik
# Bun
bun add -d typescript tsconfig-henrik
```

**Import**

| Config Path                  | Description                                      |
| ---------------------------- | ------------------------------------------------ |
| `tsconfig-henrik/base.json`  | base rules                                       |
| `tsconfig-henrik/react.json` | Rules for projects with React (not incl Next.js) |
| `tsconfig-henrik/next.json`  | Rules for Next.js projects                       |

```json
{
  "extends": "tsconfig-henrik/base.json"
  // rest of config
}
```

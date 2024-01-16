// @ts-check
/** @type {import('@ianvs/prettier-plugin-sort-imports').PrettierConfig} */
const config = {
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  trailingComma: "es5",
  printWidth: 80,
  arrowParens: "always",

  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  importOrder: [
    "<THIRD_PARTY_MODULES>", // Imports not matched by other special words or groups.
    "",
    // Common Import Aliases
    "@/(.*)$",
    "~/(.*)$",
    "^[.]", // relative imports
  ],
};

export default config;

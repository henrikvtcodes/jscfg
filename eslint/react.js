// @ts-check
/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: ["react", "jsx-a11y", "react-hooks"],
  extends: [
    "./index.js",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "prettier",
  ],

  rules: {
    "react/react-in-jsx-scope": "off",
  },

  settings: {
    react: {
      version: "detect",
    },
  },
};

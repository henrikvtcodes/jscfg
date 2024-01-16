// @ts-check
/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: ["react", "jsx-a11y", "tailwindcss", "react-hooks"],
  extends: [
    "./index.js",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],

  rules: {
    "react/react-in-jsx-scope": "off",
    "tailwindcss/no-custom-classname": "off",
  },

  settings: {
    react: {
      version: "detect",
    },
    tailwindcss: {
      callees: ["cva", "cn", "clsx"],
    },
  },
};

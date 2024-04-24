// @ts-check
/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: ["tailwindcss"],
  extends: ["plugin:tailwindcss/recommended"],

  rules: {
    "tailwindcss/no-custom-classname": "off",
  },

  settings: {
    tailwindcss: {
      callees: ["classnames", "clsx", "ctl", "cva", "tv", "cx"],
      config: "tailwind.config.ts",
    },
  },
};

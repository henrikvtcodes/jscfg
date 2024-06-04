import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
// @ts-expect-error No .d.ts for eslint-plugin-react
import reactEslintRecommended from "eslint-plugin-react/configs/recommended";
// @ts-expect-error No .d.ts for eslint-plugin-react
import reactEslintJSXRuntime from "eslint-plugin-react/configs/jsx-runtime";
// @ts-expect-error No .d.ts for eslint-plugin-jsx-a11y
import jsxA11YEslint from "eslint-plugin-jsx-a11y";
import globals from "globals";
import { FlatConfig } from "@typescript-eslint/utils/ts-eslint";
// @ts-expect-error No .d.ts for eslint-plugin-react
import nextEslint from "@next/eslint-plugin-next";
// @ts-expect-error No .d.ts for eslint-config-next
import nextEslintCWV from "eslint-config-next/core-web-vitals";
// @ts-expect-error No .d.ts for eslint-plugin-tailwindcss
import tailwindEslint from "eslint-plugin-tailwindcss";

type UIValues = "react" | "nextjs";

type ConfigOptions = {
  tsconfigRoot: string;
  tsStylistic: boolean;
  tsStrict: boolean;
  ui: UIValues[];
  drizzle: boolean;
  tailwindcss: boolean;
};

const react: FlatConfig.Config[] = [
  {
    files: ["**/*.{tsx,mtsx}"],
    plugins: {
      "jsx-a11y": jsxA11YEslint,
    },
    ...reactEslintRecommended,
    ...reactEslintJSXRuntime,
    languageOptions: {
      ...reactEslintRecommended.languageOptions,
      ...reactEslintJSXRuntime.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
    rules: {
      ...reactEslintRecommended.rules,
      ...reactEslintJSXRuntime.rules,
      ...jsxA11YEslint.configs.recommended.rules,
    },

    settings: {
      react: {
        linkComponents: [
          // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
          { name: "Link", linkAttribute: ["to", "href"] }, // allows specifying multiple properties if necessary
        ],
      },
    },
  },
];

const nextjs: FlatConfig.Config = {
  files: ["*.tsx"],
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: {
      ...globals.browser,
    },
  },
  settings: {
    react: {
      version: "detect",
      linkComponents: [
        { name: "Link", linkAttribute: "href" },
        { name: "NextLink", linkAttribute: "href" },
      ],
    },
  },
};

const drizzle: FlatConfig.Config = {
  files: ["*.ts", "*.tsx"],
  languageOptions: {},
  settings: {
    react: {
      version: "detect",
    },
  },
};

const defaultOptions: ConfigOptions = {
  tsconfigRoot: __dirname,
  tsStylistic: true,
  tsStrict: true,
  ui: [],
  drizzle: false,
  tailwindcss: false,
};

function jscfg(
  // Make config options optional
  options?: Partial<ConfigOptions>
): FlatConfig.ConfigArray {
  const strictOpts: ConfigOptions = {
    ...defaultOptions,
    ...options,
  };

  const stylistic = strictOpts.tsStylistic
    ? tseslint.configs.stylisticTypeChecked
    : [];
  const strict = strictOpts.tsStrict ? tseslint.configs.strictTypeChecked : [];

  const tailwindcss =
    // If the tailwindcss option is not set,
    // enable the tailwind config by default when the ui framework is set
    strictOpts.tailwindcss === undefined
      ? strictOpts.ui === undefined
        ? []
        : tailwindEslint.configs["flat/recommended"]
      : // If the tailwindcss option is a boolean
        strictOpts.tailwindcss
        ? tailwindEslint.configs["flat/recommended"]
        : [];

  const drizzleConfig: FlatConfig.Config = strictOpts.drizzle ? drizzle : {};

  let uiConfigs: FlatConfig.ConfigArray = [];
  for (const opt of strictOpts.ui ?? []) {
    switch (opt) {
      case "react":
        uiConfigs.push(...react);
        break;
      case "nextjs":
        uiConfigs.push(...react);
        uiConfigs.push(nextjs);
        break;
    }
  }

  return tseslint.config(
    {
      ignores: ["node_modules"],
      languageOptions: {
        parserOptions: {
          project: true,
          tsconfigRootDir: strictOpts.tsconfigRoot,
        },
      },
    },
    js.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    ...stylistic,
    ...strict,
    ...uiConfigs,
    ...tailwindcss,
    drizzleConfig,
    eslintConfigPrettier
  );
}

export default jscfg;
export { jscfg as eslint };

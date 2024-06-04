import { expect, test } from "vitest";
import { Linter } from "eslint";
import * as ESlint from "eslint";
import { join } from "path";

import generateConfig from "../src/eslint";

// Get project root directory
// const root = join(__dirname, "..");

// console.log(JSON.stringify({ root }, null, 2));

test("Base config", async () => {
  const config = generateConfig({
    tsStrict: false,
    tsStylistic: false,
    drizzle: false,
    tailwindcss: false,
  });

  const linter = new Linter();

  const code = "";

  // Validate the code using the generated config
  // @ts-expect-error Incorrect eslint types?
  const messages = linter.verify(code, config);
});

test("Default config", async () => {
  const config = generateConfig();

  const linter = new Linter();

  const code = "";

  // Validate the code using the generated config
  // @ts-expect-error Incorrect eslint types?
  const messages = linter.verify(code, config);
});

// import eslint from "@eslint/js";
// import tseslint from "typescript-eslint";

// test("ts-eslint test test", () => {
//   const linter = new Linter();

//   const code = "";

//   const config = tseslint.config(
//     eslint.configs.recommended,
//     ...tseslint.configs.recommended,
//     ...tseslint.configs.recommendedTypeChecked,
//     {
//       ignores: ["node_modules"],
//       languageOptions: {
//         parserOptions: {
//           project: true,
//           tsconfigRootDir: join(__dirname, ".."),
//         },
//       },
//     }
//   );

//   // Validate the code using the generated config
//   // @ts-expect-error Incorrect eslint types?
//   const messages = linter.verify(code, config);
// });

const uiFrameworks = ["react", "nextjs"] as const;

for (const ui of uiFrameworks) {
  test(`UI Framework: ${ui}`, async () => {
    const config = generateConfig({
      tsStrict: false,
      tsStylistic: false,
      drizzle: false,
      tailwindcss: false,
      ui: [ui],
    });

    const linter = new Linter();

    const code = "";

    // Validate the code using the generated config
    // @ts-expect-error Incorrect eslint types?
    const messages = linter.verify(code, config);
  });

  test(`UI Framework: ${ui} + Tailwind`, async () => {
    const config = generateConfig({
      tsStrict: false,
      tsStylistic: false,
      drizzle: false,
      tailwindcss: true,
      ui: [ui],
    });

    const linter = new Linter();

    const code = "";

    // Validate the code using the generated config
    // @ts-expect-error Incorrect eslint types?
    const messages = linter.verify(code, config);
  });
}

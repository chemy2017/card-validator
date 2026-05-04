import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";
import * as jsoncParser from "jsonc-eslint-parser";

export default tseslint.config(
  // Global ignores
  {
    ignores: [
      "**/node_modules/",
      "**/dist/",
      "scripts/",
      "tools/",
      "sales/",
      "js/",
      "ai_nichijo/",
      "packages/tools/",
      "packages/design-tokens/",
      "packages/web/",
      "**/*.js",
      "**/*.mjs",
      "**/*.cjs",
    ],
  },

  // Base JS recommended rules
  js.configs.recommended,

  // TypeScript recommended (no type-checking required)
  ...tseslint.configs.recommended,

  // React Hooks rules (apps/web only)
  {
    files: ["apps/web/src/**/*.{ts,tsx}"],
    plugins: { "react-hooks": reactHooks },
    rules: {
      ...reactHooks.configs["recommended-latest"].rules,
    },
  },

  // Shared settings for all TS files
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2020,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      // Allow unused vars prefixed with _
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      // Disallow explicit any (S1-05: all any eliminated)
      "@typescript-eslint/no-explicit-any": "error",
      // Allow empty functions (common in React event handlers)
      "@typescript-eslint/no-empty-function": "off",
      // Allow non-null assertions (game state often has guaranteed values)
      "@typescript-eslint/no-non-null-assertion": "off",
    },
  },

  // JSON locale files (suppress "no matching configuration" warnings in strict gates)
  {
    files: ["**/*.json"],
    languageOptions: {
      parser: jsoncParser,
    },
    rules: {},
  },

  // Test files: relax unused-vars only
  {
    files: ["**/__tests__/**/*.{ts,tsx}", "**/*.test.{ts,tsx}"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
    },
  },

  // Disable formatting rules (handled by Prettier)
  eslintConfigPrettier,
);

import css from "@eslint/css";
import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig([
  js.configs.recommended,
  {
    languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    globals: {
      ...globals.browser,
      },
    },
    rules: {
      "no-var": "error",          
      "prefer-const": "error",
      "no-console": "error",
		},
    extends: [eslintConfigPrettier]
  },
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    extends: ["css/recommended", eslintConfigPrettier]
  },
]);

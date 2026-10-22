import css from "@eslint/css";
import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";

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
		}
  },
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    extends: ["css/recommended"]
  },
]);

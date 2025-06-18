import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], languageOptions: { globals:{
    ...globals.browser,
    ...globals.node
  } } },
  {rules: {
    "no-unused-vars": "error",
    "prefer-const": "error",
    "no-unused-expressions": "error",
    "no-console": "warn",
    "no-undef": "error",
    "no-duplicate-imports": "error"
    // "semi": ["error", "always"]
  }},
  tseslint.configs.recommended,
]);

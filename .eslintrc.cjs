/** @type {import("@types/eslint").ESLint.ConfigData} */

module.exports = {
  extends: ["plugin:prettier/recommended", "plugin:astro/recommended"],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
  ],
};

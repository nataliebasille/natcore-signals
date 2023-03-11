module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    indent: ["error", 4],
    "linebreak-style": ["error", "windows"],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "max-len": ["error", { code: 120 }],
    "react-hooks/rules-of-hooks": "error",
  },
};

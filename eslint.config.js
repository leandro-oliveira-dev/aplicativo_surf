// eslint.config.js
module.exports = {
  env: {
    jest: true,
    node: true,
    es6: true,
  },
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  rules: {
    // Suas regras personalizadas
  },
};

module.exports = {
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["off"],
    "no-undef": ["off"]
  },
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2021,
  }
}
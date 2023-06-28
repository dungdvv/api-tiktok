module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["standard", "plugin:import/errors", "plugin:import/warnings"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "import/no-unresolved": [2, { commonjs: true, amd: true }],
    "comma-dangle": 0,
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "max-len": [
      "error",
      100,
      {
        ignoreStrings: true,
      },
    ],
    "no-alert": "off",
    "no-console": "off",
    "no-debugger": "error",
    "no-param-reassign": "off",
    "import/prefer-default-export": "off",
    "max-classes-per-file": ["error", 2],
    "no-restricted-exports": "off",
    "import/no-unused-modules": "error",
    "space-before-function-paren": 0,
  },
  settings: {
    "import/resolver": {
      "babel-module": { allowExistingDirectories: true },
    },
  },
};

module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:node/recommended",
    "plugin:flowtype/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jest/recommended"
  ],
  plugins: ["flowtype", "promise", "jest", "graphql"],
  rules: {
    "comma-dangle": [2, "always-multiline"],
    "jsx-quotes": ["error", "prefer-double"],
    "keyword-spacing": ["error"],
    "linebreak-style": ["error", "unix"],
    "newline-before-return": ["error"],
    "no-case-declarations": ["error"],
    "no-console": [0],
    "no-else-return": ["error"],
    "no-extra-semi": ["error"],
    "no-multi-spaces": ["error"],
    "no-multiple-empty-lines": ["error"],
    "no-trailing-spaces": ["error"],
    "object-curly-spacing": ["error", "always"],
    quotes: ["error", "double"],
    "react/prop-types": 0,
    semi: ["error", "always"],
    "sort-imports": [
      "error",
      {
        ignoreCase: true,
        memberSyntaxSortOrder: ["none", "all", "single", "multiple"]
      }
    ],
    "sort-keys": ["warn", "asc", { natural: true }],
    "space-before-blocks": ["error", "always"],
    "space-before-function-paren": [
      "error",
      { anonymous: "never", named: "never", asyncArrow: "always" }
    ],
    "space-in-parens": ["error", "never"],
    "wrap-iife": ["error", "inside"],
    "graphql/template-strings": [
      "error",
      {
        env: "apollo",
        schemaJson: require("./src/schema.js")
      }
    ]
  },
  globals: {},
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true
    },
    flowVersion: "0.98.1"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};

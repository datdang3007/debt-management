/* eslint-env node */

module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:react-native/all",
    "plugin:react/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    "react-native/react-native": true,
  },
  plugins: ["react", "react-native"],
  rules: {
    "no-unused-vars": "off",
    "react/prop-types": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react-native/sort-styles": "off",
    "react-native/no-inline-styles": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};

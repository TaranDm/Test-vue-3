import { module } from "node:path";

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },

  rules: {
    "vue/no-mutating-props": "off",
    "vue/require-valid-default-prop": "off",
    "vue/no-useless-template-attributes": "off",
    "vue/multi-word-component-names": "off",
    "vue/no-reserved-component-names": "off",
    "prettier/prettier": [
      "error",
      {
        tabWidth: 4,
        printWidth: 100,
        singleQuote: true,
        trailingComma: "es5",
      },
    ],
  },
};
// {
//   printWidth: 100,
//       singleQuote: true,
//     trailingComma: "es5",
// },

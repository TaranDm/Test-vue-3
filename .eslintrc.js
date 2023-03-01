module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },

  rules: {
    "vue/no-mutating-props": "off",
    "vue/require-valid-default-prop": "off",
    "vue/no-useless-template-attributes": "off",
    "vue/multi-word-component-names": "off",
    "vue/no-reserved-component-names": "off",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": [
      "off",
      {
        endOfLine: "auto",
      },
    ],
  },
};

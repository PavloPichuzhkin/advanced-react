module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "standard-with-typescript"
    ],
    // "parser": "@typescript-eslint/parser",

    "overrides": [],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json",

    },
    "plugins": [
        "react", "@typescript-eslint"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        // "indent": ["error", 4],
        "indent": "off",
        "@typescript-eslint/indent": ["error", 4],
        "react/jsx-filename-extension": [
            2,
            {extensions: [".js", ".jsx", ".tsx"]},
        ],

        // "import/no-unresolved": "warn",
        "import/prefer-default-export": "warn",
        "no-unused-vars": "warn",
        "react/require-default-props": "warn",
        "react/button-has-type": "warn",
        "react/jsx-props-no-spreading": "warn",
        // "react/function-component-definition": "off",
        // "no-shadow": "off",
        // "import/extensions": "off",
        // "import/no-extraneous-dependencies": "off",
        "no-underscore-dangle": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "warn",
        "@typescript-eslint/strict-boolean-expressions": "warn",
        "@typescript-eslint/naming-convention": "warn",
        "@typescript-eslint/explicit-function-return-type":  "warn",
        "@typescript-eslint/consistent-type-imports": "warn",
    },
    // globals: {
    //     __IS_DEV__: true,
    // },
}

module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
    ],
    "rules": {
        "semi": "error",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/unbound-method": "off",
        "@typescript-eslint/explicit-function-return-type": "warn",
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/interface-name-prefix":
            [
                "error",
                "always"
            ],
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-misused-promises": "warn",
        "quotes": "off",
        "@typescript-eslint/quotes":
            [
                "error",
                "single"
            ],
        "@typescript-eslint/prefer-for-of": "warn",
        "new-parens": "warn",
        "@typescript-eslint/type-annotation-spacing": "warn",
        "eqeqeq":
            [
                "error",
                "always"
            ],
        "eol-last": "error",
        "spaced-comment": "warn",
        "@typescript-eslint/member-ordering": "off",
        "@typescript-eslint/explicit-function-return-type":
            [
                "warn",
                {
                    "allowExpressions": true
                }
            ],
        "@typescript-eslint/no-misused-promises":
            [
                "error",
                {
                    "checksVoidReturn": false
                }
            ],
        "@typescript-eslint/no-use-before-define":
            [
                "error",
                {
                    "functions": false,
                    "classes": false
                }
            ]
        ,
    }
};

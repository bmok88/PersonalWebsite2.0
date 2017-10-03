module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "react/no-unescaped-entities": 0,
        "react/jsx-filename-extension": 0,
        "no-use-before-define": 0,
        "no-unused-vars": 0,
        "jsx-a11y/href-no-hash": 0,
        "no-const-assign": 1,
        "no-extra-semi": 0,
        "semi": 0,
        "no-fallthrough": 0,
        "no-empty": 0,
        "no-mixed-spaces-and-tabs": 0,
        "no-redeclare": 0,
        "no-this-before-super": 1,
        "no-undef": 1,
        "no-unreachable": 1,
        "no-use-before-define": 0,
        "constructor-super": 1,
        "curly": 0,
        "eqeqeq": 0,
        "func-names": 0,
        "valid-typeof": 1
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 2016,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "classes": true,
            "defaultParams": true
        }
    },
    "env": {
        "es6": true,
        "browser": true,
        "node": true
    }
};
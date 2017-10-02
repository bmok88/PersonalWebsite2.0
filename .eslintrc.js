module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "react/jsx-filename-extension": 0,
        "no-use-before-define": 0,
        "no-unused-vars": 0,
        "jsx-a11y/href-no-hash": 0
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 2016,
        "sourceType": "module",
        "ecmaFeatures": {
        "jsx": true
        }
    },
    "env": {
        "es6": true,
        "browser": true,
        "node": true
    }
};
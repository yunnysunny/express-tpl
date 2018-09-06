module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "webextensions":true,
        "node": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            4
        ],
        // "linebreak-style": [
        //     "error",
        //     "windows"
        // ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
		"no-console": 0
    }
};
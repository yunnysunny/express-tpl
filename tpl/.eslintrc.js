module.exports = {
    'env': {
        'mocha': true,
        'es6': true,
        'node': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 2018
    },
    'rules': {
        'indent': [
            'error',
            4
        ],
        'max-len': ['warn', 120],
        'no-restricted-syntax': ['error', 'WithStatement'],
        'no-use-before-define': ['error', { functions: false, classes: true }],
        'space-before-function-paren': ['error', 'never'],
        'one-var': ['error', {'const': 'never', 'let': 'never'}],
        // "linebreak-style": [
        //     "error",
        //     "windows"
        // ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'no-console': 2
    }
};
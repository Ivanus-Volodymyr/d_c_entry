module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'prettier',
        'react-hooks',
        'simple-import-sort',
        'unused-imports',
        'react-refresh',
    ],
    rules: {
        'no-empty': 'warn',
        'no-undefined': 'error',
        'no-var': 'error',
        'no-mixed-operators': 'warn',
        'no-proto': 'error',
        'require-await': 'error',
        'no-multi-assign': 'error',
        'no-multi-str': 'error',
        'no-undef-init': 'error',
        eqeqeq: 'error',
        'no-alert': 'error',
        'no-duplicate-imports': 'error',
        'no-use-before-define': 'error',
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: '*', next: ['block-like', 'function'] },
            { blankLine: 'always', prev: ['block-like', 'function'], next: '*' },
        ],
        'react/react-in-jsx-scope': 'off',
        'react/no-direct-mutation-state': 'error',
        'react/jsx-no-duplicate-props': 'error',
        'react/prop-types': 'error',
        'prettier/prettier': ['warn'],
        'simple-import-sort/imports': [
            'error',
            {
                groups: [
                    // Side effect imports
                    ['^\\u0000'],
                    // Node.js builtins
                    ['^node:'],
                    // Packages
                    ['^react', '^@?\\w'],
                    // Absolute imports and other imports
                    ['^'],
                    // Relative imports
                    ['^\\.'],
                    // Style imports
                    ['^.+\\.?(css)$'],
                ],
            },
        ],
        'simple-import-sort/exports': 'error',
        'unused-imports/no-unused-imports': 'error',
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
    ignorePatterns: ['dist', '.eslintrc.cjs'],
};

module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['simple-import-sort'],
    parserOptions: {
      ecmaFeatures: { jsx: true },
    },
    env: {
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:jsx-a11y/recommended',
  
      // Prettier plugin and recommended rules
      'prettier/@typescript-eslint',
      'plugin:prettier/recommended',
      'react-hooks'
    ],
    rules: {
      // Next js JSX fix
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": [1, { "extensions": [".ts", ".tsx"] }],
      // Include .prettierrc.js rules
      'prettier/prettier': ['error', {}, { usePrettierrc: true }],
  
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'simple-import-sort/sort': 'error',

      "react-hooks/rules-of-hooks": "error",
      // Recoil hooks dependency fix
      "react-hooks/exhaustive-deps": [
        "warn", {
          "additionalHooks": "useRecoilCallback"
        }
      ]
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react', '@typescript-eslint', '@next/eslint-plugin-next', 'react-hooks'],
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:storybook/recommended'],
  overrides: [],
  rules: {
    'react/jsx-indent': [2, 4],
    'react/jsx-indent-props': [2, 4],
    indent: [2, 4],
    'react/jsx-filename-extension': [2, {
      extensions: ['.js', '.jsx', '.tsx']
    }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'max-len': ['error', {
      ignoreComments: true,
      code: 120
    }],
    'arrow-body-style': 'off',
    'object-curly-newline': ['error', {
      ObjectPattern: {
        multiline: false
      }
    }],
    "react/button-has-type": 'off',
    "jsx-a11y/no-autofocus": "off",
    "react-hooks/rules-of-hooks": 'error',
    "react-hooks/exhaustive-deps": 'error',
    "jsx-a11y/click-events-have-key-events": 'warn',
    "jsx-a11y/no-static-element-interactions": 'warn',
    "jsx-a11y/label-has-associated-control": 'warn',
    'no-param-reassign': 'off',
  },
  ignorePatterns: ['.eslintrc.js'],
      overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                'no-undef': 'off',
            },
        },
          {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {

                'max-len': 'off',
            },
        },
    ],
};
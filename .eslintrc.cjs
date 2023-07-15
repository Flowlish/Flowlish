/* eslint-env node */

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb', 
    'airbnb-typescript', 
    'eslint:recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  ignorePatterns: [
    "tailwind.config.js", 
    "postcss.config.js",
    ".eslintrc.cjs", 
    "tsconfig.json",
    "vite.config.ts",
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: [
    'react-refresh',
    '@typescript-eslint',
  ],
  rules: {
    'linebreak-style': 'on',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'react/jsx-props-no-spreading': 'off',
    'arrow-body-style': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
    'react/jsx-key': 'error',
    'react/jsx-one-expression-per-line': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        '': 'never',
        'js': "never",
        'jsx': "never",
        'ts': 'never',
        'tsx': 'never'
      }
   ]
  },
}

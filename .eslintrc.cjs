module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'react-app',
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:cypress/recommended',
    'plugin:react-hooks/recommended',
    'mantine'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['src/**/*.*'],
      extends: [
        'plugin:@typescript-eslint/strict',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: { project: ['./tsconfig.json'] },
      rules: {
        '@typescript-eslint/non-nullable-type-assertion-style': 'off',
        '@typescript-eslint/no-misused-promises': [
          'error',
          { checksVoidReturn: false },
        ],
      },
    },
  ],
  plugins: ['react', '@typescript-eslint'],
  settings: {
    react: { version: 'detect' },
  },
  ignorePatterns: ['build', 'dist', 'coverage', 'node_modules'],
  rules: {
    'no-shadow': 'error',
    'no-console': 'warn',
    'react/self-closing-comp': 'error',
    'react/no-array-index-key': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
  },
};

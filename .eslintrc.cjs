var tsConfigs = ['./tsconfig.json']

var ruleOverrides = {}

module.exports = {
  overrides: [
    {
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@next/next/recommended',
        'prettier',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: tsConfigs,
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint', 'prettier'],
      rules: {
        'prettier/prettier': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        'prefer-const': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
      files: [
        'src/**/*.ts',
        'src/**/*.tsx',
        'emails/**/*.ts',
        'emails/**/*.tsx',
      ],
    },
    {
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: tsConfigs,
        sourceType: 'module',
      },
      plugins: [
        '@typescript-eslint',
        'prettier',
        'plugin:playwright/playwright-test',
      ],
      rules: {
        'prettier/prettier': 'error',
      },
      files: ['e2e/**/*.spec.ts'],
    },
    {
      extends: ['eslint:recommended', 'prettier', 'esnext'],
      files: '*.mjs',
      rules: ruleOverrides,
    },
    {
      extends: ['prettier'],
      files: '*.js',
      rules: ruleOverrides,
    },
  ],
  root: true,
}

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard-with-typescript',
    'plugin:astro/jsx-a11y-strict'
  ],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      },
      rules: {
        'astro/semi': [
          'error',
          'never'
        ]
      }
    },
    {
      files: ['**/*.astro/*.js', '*.astro/*.js'],
      extends: ['standard-with-typescript'],
      env: {
        browser: true,
        es2020: true
      },
      parserOptions: {
        sourceType: 'module',
        parser: '@typescript-eslint/parser'
      },
      rules: {
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    extraFileExtensions: ['.astro']
  },
  rules: {
  }
}

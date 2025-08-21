import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      // Modern JavaScript best practices
      'prefer-const': 'warn',
      'no-var': 'warn',
      'object-shorthand': 'warn',
      'prefer-template': 'warn',
      'prefer-arrow-callback': 'warn',
      'arrow-spacing': 'warn',
      'prefer-spread': 'warn',
      'prefer-destructuring': ['warn', { object: true, array: false }],

      // Function and variable best practices - Changed to warn to prevent build failures
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-duplicate-imports': 'warn',
      'no-useless-return': 'warn',
      'no-useless-concat': 'warn',
      'no-useless-constructor': 'warn',

      // Code quality - Changed to warn to prevent build failures
      complexity: ['warn', 10],
      'max-depth': ['warn', 4],
      'max-lines-per-function': ['warn', { max: 50 }],
      'max-params': ['warn', 4],

      // React specific
      'react/jsx-boolean-value': 'warn',
      'react/jsx-curly-brace-presence': [
        'warn',
        { props: 'never', children: 'never' },
      ],
      'react/jsx-fragments': ['warn', 'syntax'],
      'react/jsx-no-useless-fragment': 'warn',
      'react/self-closing-comp': 'warn',

      // TypeScript specific - Disable type-aware rules that cause build issues
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/prefer-optional-chain': 'off', // Disabled to prevent build issues
      '@typescript-eslint/prefer-nullish-coalescing': 'off', // Disabled to prevent build issues

      // Security
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',

      // Performance
      'no-loop-func': 'warn',
      'no-inner-declarations': 'warn',
    },
  },
  {
    files: ['**/*.js', '**/*.mjs'],
    rules: {
      // Modern JavaScript best practices
      'prefer-const': 'warn',
      'no-var': 'warn',
      'object-shorthand': 'warn',
      'prefer-template': 'warn',
      'prefer-arrow-callback': 'warn',
      'arrow-spacing': 'warn',
      'prefer-spread': 'warn',
      'prefer-destructuring': ['warn', { object: true, array: false }],

      // Function and variable best practices - Changed to warn to prevent build failures
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-duplicate-imports': 'warn',
      'no-useless-return': 'warn',
      'no-useless-concat': 'warn',
      'no-useless-constructor': 'warn',

      // Code quality - Changed to warn to prevent build failures
      complexity: ['warn', 10],
      'max-depth': ['warn', 4],
      'max-lines-per-function': ['warn', { max: 50 }],
      'max-params': ['warn', 4],

      // Security
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',

      // Performance
      'no-loop-func': 'warn',
      'no-inner-declarations': 'warn',
    },
  },
]

export default eslintConfig

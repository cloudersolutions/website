import eslint from '@eslint/js';
import tsEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import astroPlugin from 'eslint-plugin-astro';
import astroParser from 'astro-eslint-parser';

export default [
  {
    ignores: ['dist/*', 'node_modules/*', '.astro/*']
  },
  {
    languageOptions: {
      globals: {
        process: 'readonly'
      }
    }
  },
  {
    files: ['**/*.js', '**/*.mjs'],
    ...eslint.configs.recommended
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json'
      }
    },
    plugins: {
      '@typescript-eslint': tsEslint
    },
    rules: {
      ...tsEslint.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }]
    }
  },
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.astro'],
        project: './tsconfig.json'
      }
    },
    plugins: {
      astro: astroPlugin,
      '@typescript-eslint': tsEslint
    },
    rules: {
      ...astroPlugin.configs.recommended.rules,
      ...tsEslint.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }]
    }
  }
];

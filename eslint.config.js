import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import unusedImports from 'eslint-plugin-unused-imports'
import importSort from 'eslint-plugin-simple-import-sort'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'unused-imports': unusedImports,
      'simple-import-sort': importSort,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'semi': [1, 'never'],
      'quotes': [1, 'single'],
      'jsx-quotes': [1, 'prefer-single'],
      'eol-last': [1, 'always'],
      'no-var': 2,
      'comma-dangle': [
        'warn',
        {
          'arrays': 'only-multiline',
          'objects': 'only-multiline',
          'imports': 'only-multiline',
          'exports': 'only-multiline',
          'functions': 'only-multiline'
        }
      ],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'none',
          ignoreRestSiblings: true,
        },
      ],
      'unused-imports/no-unused-vars': [
        'warn',
        {
          'vars': 'all',
          'varsIgnorePattern': '^_',
          'args': 'after-used',
          'argsIgnorePattern': '^_'
        }
      ],
      'no-console': ['warn'],
      'no-alert': ['warn'],
      'arrow-parens': ['warn'],
      'simple-import-sort/imports': ['warn', {
        'groups': [
          [
            '^react',
            '<THIRD_PARTY_MODULES>',
            '^@?\\w',
            '^api/(.*)',
            '^assets/(.*)',
            '^components/(.*)',
            '^pages/(.*)',
            '^i18n/(.*)',
            '^store/(.*)',
            '^utils/(.*)',
            '^types/(.*)',
            '^types'
          ],
          ['^\\.'],
          ['.styled', '.module.css']
        ]
      }]
    },
  },
)

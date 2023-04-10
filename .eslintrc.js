module.exports = {
  root: true,
  extends: [
    'kentcdodds',
    'kentcdodds/react',
    'kentcdodds/jsx-a11y',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:@next/next/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/accessible-emoji': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'new-cap': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  overrides: [
    {
      files: ['**/*.(d.)?ts(x)?'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {},
    },
  ],
};

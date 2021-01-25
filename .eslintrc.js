// .eslintrc.js

module.exports = {
  extends: [
    '@akijoey',
    'standard-with-typescript',
    'prettier/@typescript-eslint',
    'prettier/react'
  ],
  plugins: ['react'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname
  },
  rules: {
    'one-var': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-var-requires': 0
  }
}

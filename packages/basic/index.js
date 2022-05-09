module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:import/recommended'
  ],
  ignorePatterns: [
    '*.min.*',
    'dist',
    'public',
    'coverage',
    'packages-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock'
  ],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs'] }
    }
  },
  rules: {
    // import
    'import/order': 'error',
    'import/first': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-unresolved': 'off',
    'import/no-absolute-path': 'off',
        
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
    indent: ['error', 2, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }]
  }
}

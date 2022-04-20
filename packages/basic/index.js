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
  rules: {
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
    indent: ['error', 2, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }]
  }
}

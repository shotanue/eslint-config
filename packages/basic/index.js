module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true
    },
    extends:[
        'standard',
        'plugin:import/recommended',
    ],
    ignorePatterns: [
        '*.min.*',
        'dist',
        'public',
        'coverage',
        'packages-lock.json',
        'pnpm-lock.yaml',
        'yarn.lock',
    ]
}
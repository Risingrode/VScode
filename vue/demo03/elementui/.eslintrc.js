export default {
    root: true,
    env: {
        node: true
    },

    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    parserOptions: {
        parser: 'babel-eslint',
        requireConfigFile: false,
        parser: '@babel/eslint-parser',
        ecmaVersion: 7,
        sourceType: "module"
    },
    // parserOptions: {

    // },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
}
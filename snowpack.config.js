module.exports = {
    extends: '@snowpack/app-scripts-react',
    plugins: [
        '@snowpack/plugin-webpack'
    ],
    alias: {
        '@app': './src'
    },
    proxy: {
        '/api': 'http://localhost:3000'
    },
    devOptions: {
        open: 'none'
    },
    buildOptions: {
        clean: true
    }
}

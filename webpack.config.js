let path = require('path')

module.exports = {
    entry: './src/main.js',
    mode: 'production',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'genGraph-1.0.js'
    }
}
let path = require('path')

module.exports = {
    entry: './src/main.js',
    mode: 'none',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'genGraph-0.1.js'
    }
}
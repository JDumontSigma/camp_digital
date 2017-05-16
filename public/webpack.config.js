const path = require('path');

module.exports = {
    entry: './js/dev/main.js',
    output:{
        path: path.resolve(__dirname, 'js'),
        filename: 'scripts.bundled.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer:{
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8000
    },
    module:{
        rules:[{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query:{
                presets:['es2015', 'react']
            }
        }]
    }
};
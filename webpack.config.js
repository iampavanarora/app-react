var path    = require('path');
var hwp     = require('html-webpack-plugin');
var ihp     = require('interpolate-html-plugin')
module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        filename: 'build.js',
        publicPath: "http://localhost:8080/dist/"
    },
    module:{
        rules:[{
            exclude: /node_modules/,
            test: /\.js$/,
            loader: 'babel-loader'
        },
        {
            test: /\.scss$/,
            loader: 'style!css!resolve-url!sass?sourceMap'
        },
        {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        },
        { test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/, loader: "file-loader" }
        ]
    },
    plugins:[
        // Generates an index.html file with the <script> injected.

        new hwp({

          inject: true,

          template: path.join(__dirname, '/src/index.html'),

          chunksSortMode: 'none'

        }),
      new ihp({
        'NODE_ENV': 'development'
      })
    ]
}
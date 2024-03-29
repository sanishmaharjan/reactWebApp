const path = require('path');
const webpack = require('webpack');
const { StatsWriterPlugin } = require('webpack-stats-plugin');

const config = {
    resolve: {
        modules: [path.resolve('./app'), path.resolve('./node_modules')]
    },
    entry:{
        vendor: [
            'react',
            'react-dom',
            'react-router-dom',
            'prop-types',
            'axios',
            'babel-polyfill',
            'lodash.pickby'
        ],
        app: ['./app/index.js']
    },
    output: {
        path: path.resolve(__dirname, 'app/build'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                'loader': 'babel-loader',
                options: {
                    presets: ['react', 'env', 'stage-2']
                }
            }
        },
        {
            test: /\.css$/,
            use: ['style-loader','css-loader' ]
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new StatsWriterPlugin({
            filename: 'stats.json',
            fields: ['assets', 'assetsByChunkName', 'chunks'],
        })
    ]
};

module.exports = config;

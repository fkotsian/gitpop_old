var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
  entry: [
    'babel-polyfill', 
    APP_DIR + '/index.js'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0']
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
};

module.exports = config;

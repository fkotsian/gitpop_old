var webpack = require('webpack');

module.exports = function(config) {
  config.set({
    basepath: '',
    browsers: ['Chrome'],
    singleRun: false,
    frameworks: [
      'jasmine-ajax',
      'jasmine'
    ],
    files: [
      'spec/*_spec.js'
    ],
    preprocessors: {
      'spec/*_spec.js': ['webpack']
    },
    reporters: ['dots'],
    webpack: {
      module: {
        loaders: [{
          test: /\.js$/,
          loader: 'babel-loader'
        }]
      }
    },
    webpackMiddleware: {
      noInfo: true
    }
  })
}

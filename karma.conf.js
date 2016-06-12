var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};

module.exports = function(config) {
  config.set({
    basepath: '',
    browsers: ['Chrome'],
    singleRun: false,
    frameworks: [
      'jasmine-ajax',
      'jasmine'
    ],
    plugins: [
      'karma-jasmine',
      'karma-jasmine-ajax',
      'karma-webpack',
      'karma-chrome-launcher'
    ],
    files: [
      'spec/*_spec.js',
      'spec/**/*_spec.js'
    ],
    preprocessors: {
      'spec/*_spec.js': ['webpack'],
      'spec/**/*_spec.js': ['webpack']
    },
    reporters: ['dots'],
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    }
  })
}

var webpack = require('webpack');
var path = require('path');

module.exports = {
  // webpack options
  entry: 'main.js',
  output: {
    filename: 'out.js'
  },
  resolve: {
    alias: {
      fxaClient: 'fxa-js-client/fxa-client.js'
    },
    modulesDirectories: [ path.join(__dirname), path.join('..', __dirname, 'bower_components') ]
  },

  stats: {
    colors: false,
    modules: true,
    reasons: true
  }
};
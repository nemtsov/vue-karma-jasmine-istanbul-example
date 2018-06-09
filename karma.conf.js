const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: ['test/boot.js'],
    preprocessors: { 'test/boot.js': ['webpack'] },
    singleRun: true,
    browsers: ['ChromeHeadless'],
    reporters: ['progress', 'coverage'],
    webpack: {
      mode: 'development',
      devtool: 'inline-source-map',
      module: {
        rules: [
          { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
          { test: /\.vue$/, loader: 'vue-loader' }
        ]
      },
      plugins: [new VueLoaderPlugin()]
    }
  });
};

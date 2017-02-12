const webpack = require('webpack');
const config = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require("webpack-notifier");

// eval-source-map is faster for development
// config.devtool = '#eval-source-map'

// config.vue = config.vue || {};
// config.vue.loaders = config.vue.loaders || {};

// add hot-reload related code to entry chunks
// const polyfill = 'eventsource-polyfill';
// const devClient = './config/dev-client';
// Object.keys(config.entry).forEach(function (name, i) {
//   var extras = i === 0 ? [polyfill, devClient] : [devClient]
//   config.entry[name] = extras.concat(config.entry[name])
// })
// necessary for the html plugin to work properly
// when serving the html from in-memory
// config.output.publicPath = '/'

config.plugins = (config.plugins || []).concat([
  new WebpackNotifierPlugin(),
  // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  // https://github.com/ampedandwired/html-webpack-plugin
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'client/src/site/index.html',
    inject: true
  }),
  new webpack.LoaderOptionsPlugin({
    options: {
      eslint: {
        formatter: require('eslint-friendly-formatter')
      },
      vue: config.vue || {},
      loaders: {},
      output: {
        publicPath: '/'
      }
    },
  }),
])

module.exports = config;

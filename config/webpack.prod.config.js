const webpack = require('webpack')
const config = require('./webpack.base.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackNotifierPlugin = require('webpack-notifier')

// naming output files with hashes for better caching.
// client/dist/index.html will be auto-generated with correct URLs.
config.output.filename = '/static/js/[name].[chunkhash].js'
config.output.chunkFilename = '/static/js/[id].[chunkhash].js'

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
  // http://vuejs.github.io/vue-loader/workflow/production.html
  // new webpack.DefinePlugin({
  //   'process.env': {
  //     NODE_ENV: '"production"'
  //   }
  // }),
  new webpack.optimize.OccurrenceOrderPlugin(),
  // extract css into its own file
  new ExtractTextPlugin({
    filename: './client/dist/css/app.bundle.css'
  }),
  // https://github.com/ampedandwired/html-webpack-plugin
  new HtmlWebpackPlugin({
    chunks: ['app'],
    filename: 'index.html',
    template: 'client/src/site/index.html',
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
      // more options:
      // https://github.com/kangax/html-minifier#options-quick-reference
    }
  }),
  new webpack.LoaderOptionsPlugin({
    options: {
      eslint: {
        formatter: require('eslint-friendly-formatter')
      },
      vue: config.vue || {},
      loaders: {}
    }
  })
  // new webpack.optimize.UglifyJsPlugin({
  //   compress: {
  //     warnings: false
  //   }
  // }),
])

module.exports = config

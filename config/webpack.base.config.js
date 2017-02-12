var path = require('path');

module.exports = {
  entry: {
    app: './client/src/site/main.js'
  },
  output: {
    path: "./client/dist",
    filename: "js/[name].bundle.js",
  },
  // resolve: {
  //   extensions: ['', '.js', '.vue'],
  //   fallback: [path.join(__dirname, '../node_modules')],
  //   alias: {
  //     'src': path.resolve(__dirname, '../client/src')
  //   }
  // },
  // resolveLoader: {
  //   fallback: [path.join(__dirname, '../node_modules')]
  // },
  module: {
    // preLoaders: [
    //   {
    //     test: /\.vue$/,
    //     loader: 'eslint',
    //     exclude: /node_modules/
    //   },
    //   {
    //     test: /\.js$/,
    //     loader: 'eslint',
    //     exclude: /node_modules/
    //   }
    // ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.html$/,
        loader: 'vue-html-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash:7]'
        }
      }
    ]
  }
}

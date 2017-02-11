const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackNotifierPlugin = require("webpack-notifier");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    "app": "./client/src/app/app.js",
    // "widget": "./client/src/widget/widget.js"
  },
  output: {
    path: __filename,
    filename: "client/dist/js/[name].bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextWebpackPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      "React": "react",
    }),
    new ExtractTextWebpackPlugin({
      filename: './client/dist/css/app.bundle.css'
    }),
    // new webpack.optimize.UglifyJsPlugin(),
    new WebpackNotifierPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./client/src/app/index.html",
      chunks: ["app"]
    }),
  ]
}

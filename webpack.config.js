var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var APP_PATH = path.resolve(ROOT_PATH, 'app');
module.exports= {
  entry: {
    app: path.resolve(APP_PATH, 'app.jsx')
  },
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },

  //enable dev source map
  devtool: 'eval-source-map',
  //enable dev server
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    // progress: true
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ["node_modules",APP_PATH]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: "pre",
        loader: "eslint-loader"
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        include: APP_PATH
      }
    ],
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Profile app'
    })
  ]
}

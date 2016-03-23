
var webpack = require('webpack'),
  path = require('path'),
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  isDev = process.env.NODE_ENV;

isDev = true;

var config = {
  cache: true,
  resolve: {
    extensions: ["", ".js", ".css", ".styl"]
  },
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    //'webpack/hot/dev-server',
    './src/app.js'
  ],
  output: {
    path: path.join(__dirname, '/build/'),
    filename: 'app.js'
    //publicPath: 'http://localhost:3001/assets/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      {test: /\.css$/, loader: isDev
        ? "style-loader!css-loader"
        : ExtractTextPlugin.extract("css", "css-loader")},
      {test: /\.styl$/, loader: isDev
        ? "style-loader!css-loader!stylus-loader"
        : ExtractTextPlugin.extract("stylus", "css-loader!stylus-loader")}
    ]
  },
  env: {
    development: { 
      plugins: [
        ["react-transform", {
          "transforms": [{
            "transform": "react-transform-hmr",
            "imports": ["react"],
            "locals": ["module"]
          },
          {
            "transform": "react-transform-catch-errors",
            "imports": [
              "react",
              "redbox-react"
            ]
          }]
        }],
        new webpack.HotModuleReplacementPlugin(),
        isDev ? "" : new ExtractTextPlugin("app.css", {allChunks: true})
      ]
    }
  }
};

if (process.env.NODE_ENV === "dev") {
  config.devtool = 'eval';
}

module.exports = config;

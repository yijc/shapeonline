import * as webpack from 'webpack';
import * as path from 'path';
declare var __dirname;

module.exports = {
  entry: './source/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js'
  },
  module: {
    loader: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        contents: false,
      },
    }),
  ]
};

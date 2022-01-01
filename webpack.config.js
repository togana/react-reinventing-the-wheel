const HtmlWebpackPlugin = require('html-webpack-plugin');
const InjectBodyPlugin = require('inject-body-webpack-plugin').default;
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'react-reinventing-the-wheel',
      filename: 'index.html',
    }),
    new InjectBodyPlugin({
      content: '<div id=root></div>'
    }),
  ],
  devServer: {
    hot: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000,
  },
};

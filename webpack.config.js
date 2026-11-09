const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './js/script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // Полностью очищает dist перед каждой новой сборкой
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // Берет ваш шаблон index.html
    }),
    new CopyPlugin({
      patterns: [
        { from: 'style.css', to: 'style.css' },                  // Переносит стили
        { from: 'img', to: 'img', noErrorOnMissing: true },      // Переносит папку с картинками
        { from: 'icons', to: 'icons', noErrorOnMissing: true },  // Переносит папку с иконками
      ],
    }),
  ],
  devtool: 'source-map',
  module: {},
};
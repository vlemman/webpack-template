const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackAssetsManifestPlugin = require('webpack-assets-manifest');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].[chunkhash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WebpackAssetsManifestPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].bundle.css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.html$/,
        use: [
          'html-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'resolve-url-loader',
          'sass-loader?sourceMap',
        ],
      },
    ],
  },
};

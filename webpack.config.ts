import * as path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
// @ts-ignore
import CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname + '/dist/'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  target: 'node',
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, './static'),
        to: '',
      },
    ]),
  ],
};

export default config;

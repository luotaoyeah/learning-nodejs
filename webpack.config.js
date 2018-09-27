const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = [
  {
    entry: path.resolve(__dirname + "/src/index.ts"),
    output: {
      path: path.resolve(__dirname + "/dist/"),
      filename: "index.js"
    },
    module: {
      rules: [
        {
          test: /\.ts?$/,
          loader: "tslint-loader",
          enforce: "pre",
          include: [path.resolve("src")]
        },
        {
          test: /\.ts$/,
          loader: "ts-loader",
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: [".ts", ".js", ".json"]
    },
    target: "node",
    mode: "development",
    devtool: "eval-source-map",
    plugins: [
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, "./static"),
          to: ""
        }
      ])
    ]
  }
];

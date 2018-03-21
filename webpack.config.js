const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");

module.exports = [
  {
    entry: path.resolve(__dirname + "/src/index.ts"),
    output: {
      path: path.resolve(__dirname + "/dist/"),
      filename: "index.js",
      libraryTarget: "umd",
      library: "ts-test",
      umdNamedDefine: true
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
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
      extensions: [".ts", ".js"]
    },
    devtool: "source-map",
    plugins: [
      new UglifyJsPlugin({
        uglifyOptions: {
          ecma: 7
        }
      })
    ]
  }
];

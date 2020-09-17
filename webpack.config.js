const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CompressionPlugin = require("compression-webpack-plugin");
// const BrotliPlugin = require("brotli-webpack-plugin");
const path = require("path");

module.exports = (env) => {
  const isProduction = env === "production";
  const devPlugins = [
    new HtmlWebpackPlugin({
      title: "React",
      template: "./public/index.html",
      inject: false,
    }),
    new MiniCssExtractPlugin(),
  ];

  const prodPlugins = [
    // new CompressionPlugin({
    //   filename: "[path].gz[query]",
    //   algorithm: "gzip",
    //   test: /\.(js|css|html|svg)$/,
    //   threshold: 10240,
    //   minRatio: 0.7,
    // }),
    // new BrotliPlugin({
    //   filename: "[path].br[query]",
    //   test: /\.(js|css|html|svg)$/,
    //   threshold: 10240,
    //   minRatio: 0.7,
    // }),
  ];

  return {
    entry: ["babel-polyfill", "whatwg-fetch", "./src/app.jsx"],
    output: {
      path: path.join(__dirname, "public"),
      filename: "bundle.js",
      chunkFilename: "[name].bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: ["babel-loader"],
        },
        {
          test: /\.css$/i,
          loader: [MiniCssExtractPlugin.loader, "style-loader", "css-loader"],
        },
        {
          test: /\.(gif|png|jpe?g|svg|eot|svg|ttf|woff|woff2|otf)$/i,
          loader: ["file-loader", "image-webpack-loader"],
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          loader: ["url-loader"],
        },
        {
          test: /\.(mp4)$/,
          loader: ["file-loader"],
        },
      ],
    },
    plugins: isProduction ? prodPlugins : devPlugins,
    devtool: isProduction ? "" : "cheap-module-eval-source-map",
    devServer: {
      hot: true,
      contentBase: path.join(__dirname, "public"),
      compress: true,
      historyApiFallback: true,
      port: 8090,
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
  };
};

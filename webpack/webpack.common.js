const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const autoprefixer = require("autoprefixer")
const webpack = require("webpack")
require("@babel/core")
module.exports = {
  entry: ["webpack-dev-server/client?http://localhost:8080", "./src/index.js"],
  output: {
    filename: "js/bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".scss", ".css"],
    alias: { "react-dom": "@hot-loader/react-dom" }
  },

  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.(js|json)$/,
        exclude: /node_modules/
      },
      {
        test: /\.html/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        use: [
          //'style-loader?sourceMap',
          MiniCssExtractPlugin.loader,
          "css-loader?sourceMap",
          {
            loader: "postcss-loader",
            options: {
              autoprefixer: {
                browser: ["last 2 versions"]
              },
              sourceMap: true,
              plugins: () => [autoprefixer]
            }
          },
          "resolve-url-loader",
          "sass-loader?sourceMap"
        ],
        test: /\.(css|scss)$/
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/",
              useRelativePath: true
            }
          },
          "image-webpack-loader?bypassOnDebug" // option de optimizacion por defecto en produccion
        ]
      },
      {
        test: /\.(ttf|eot|woff2?|mp4|mp3|txt|xml|pdf)$/i,
        use: "file-loader?name=assets/[name].[ext]"
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    })
  ]
}

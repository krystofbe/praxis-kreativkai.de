const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: [
    "webpack/hot/only-dev-server",
    "font-awesome/scss/font-awesome.scss",
    "bootstrap/dist/js/bootstrap.min.js",
    "jquery.easing/jquery.easing.min.js",
    "slick-carousel/slick/slick.min.js",
    "slick-carousel/slick/slick.scss",
    "slick-carousel/slick/slick-theme.scss",
    "./src/scss/agency.scss",
    "./src/js/agency.js",
    "./src/js/contact_me.js",
    "./src/js/jqBootstrapValidation.js",
  ],
  devServer: {
    contentBase: "./src",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: "src/", // Relative directory for base of server
    publicPath: "/",
    inline: true,
    port: process.env.PORT || 3000, // Port Number
    host: "127.0.0.1", // Change to '0.0.0.0' for external facing server
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[id].css",
    }),
    new CopyWebpackPlugin([
      {
        from: "./src/*.html",
        to: "./",
        flatten: true,
      },
      {
        from: "./src/mail",
        to: "./mail",
        flatten: true,
      },
      {
        from: "./src/img",
        to: "./img",
      },
    ]),
  ],
  module: {
    rules: [
      {
        test: require.resolve("jquery"),
        use: [
          {
            loader: "expose-loader",
            options: "jQuery",
          },
          {
            loader: "expose-loader",
            options: "$",
          },
        ],
      },
      {
        test: require.resolve("popper.js"),
        use: [
          {
            loader: "expose-loader",
            options: "Popper",
          },
        ],
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.(css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "fonts/[name].[ext]",
              mimetype: "application/font-woff",
              publicPath: "../",
            },
          },
        ],
      },

      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          "file-loader?name=../dist/img/[name].[ext]",
          "image-webpack-loader?bypassOnDebug",
        ],
      },
      // font-awesome
      {
        test: /font-awesome\.config\.js/,
        use: [{ loader: "style-loader" }, { loader: "font-awesome-loader" }],
      },

      // Bootstrap 4
      {
        test: /bootstrap\/dist\/js\/umd\//,
        use: "imports-loader?jQuery=jquery",
      },
    ],
  },
};

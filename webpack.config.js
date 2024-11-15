const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // Mode configuration (can be 'development' or 'production')
  mode: "development",

  // Entry point for your application
  entry: "./src/index.js",

  // Output configuration
  output: {
    filename: "bundle.js", // Consolidating to 'bundle.js' as specified
    path: path.resolve(__dirname, "dist"),
    clean: true, // Ensures the output folder is cleaned before building
  },

  // Enable source maps for easier debugging in development mode
  devtool: "eval-source-map",

  // DevServer configuration for live reloading
  devServer: {
    static: path.resolve(__dirname, "dist"), // Serve content from the 'dist' directory
    watchFiles: ["./src/template.html"], // Watch for changes in your HTML file
    open: true, // Automatically open the browser on server start
  },

  // Display additional stats for child modules
  stats: {
    children: true,
  },

  // Enable file system caching for faster rebuilds
  cache: {
    type: "filesystem",
    cacheDirectory: path.resolve(__dirname, ".temp_cache"),
  },

  // Plugins to enhance functionality
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "template.html"), // Template file for generating HTML
    }),
  ],

  // Module rules for handling different file types
  module: {
    rules: [
      // CSS files: Processed with 'style-loader' and 'css-loader'
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // HTML files: Processed with 'html-loader'
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      // Image assets: Handled as separate resources
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};

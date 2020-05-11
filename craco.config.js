const sass = require("sass");
const interpolateHtml = require("craco-interpolate-html-plugin");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const env = require("./config/env");
const { template } = require("./config/utils");
const packageJson = require('./package.json');

env(".env.local", ".env");
const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  babel: {
    plugins: isProduction ? [] : ["react-refresh/babel"],
  },
  webpack: {
    plugins: isProduction
        ? []
        : [
          new ReactRefreshPlugin({
            disableRefreshCheck: true,
          }),
        ],
  },
  plugins: [
    {
      plugin: interpolateHtml,
      options: {
        manifest: template("config/manifest.ejs", {
          isProduction,
          PUBLIC_URL: isProduction ? process.env.PUBLIC_URL : "",
          TITLE: packageJson.name,
        }),
        googleAnalytics: template("config/google-analytics.ejs", {
          GOOGLE_ANALYTICS_ID: process.env.REACT_APP_GOOGLE_ANALYTICS_ID,
        }),
      },
    },
  ],
  style: {
    modules: {
      localIdentName: "[folder]--[name]--[local]--[hash:base64:5]",
    },
    postcss: {
      mode: "file",
    },
    css: {
      loaderOptions: {
        sourceMap: true,
      },
    },
    sass: {
      loaderOptions: {
        // Prefer 'sass' (dart-sass) over 'node-sass' if both packages are installed.
        implementation: sass,
        // Workaround for this bug: https://github.com/webpack-contrib/sass-loader/issues/804
        webpackImporter: false,
        sourceMap: true,
      },
    },
  },
};

require("dotenv").config();

// next.js doesn't transpile node-modules by default
// this plugin provides that functionality
const withTM = require("next-transpile-modules");

const env = process.env.NODE_ENV;
const isDev = env === "development";
const isProd = env === "production";
const isTest = env === "test";

module.exports = withTM({
  env: {
    API_URL: process.env.API_URL,
    IS_DEV: isDev,
    IS_PROD: isProd,
    IS_TEST: isTest,
  },
  target: "serverless",
  transpileModules: ["@debtcollective/header", "@debtcollective/tools"],
});

// next.js doesn't transpile node-modules by default
// this plugin provides that functionality
const withTM = require("next-transpile-modules");

module.exports = withTM({
  target: "serverless",
  transpileModules: ["@debtcollective/header"],
});

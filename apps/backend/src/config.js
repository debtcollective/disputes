import nconf from "nconf";

process.env.NODE_ENV = process.env.NODE_ENV || "development";
const env = process.env.NODE_ENV;
const isProd = env === "production";
const isTest = env === "test";

// load dotenv config
require("dotenv").config();

nconf
  .env({
    separator: "__",
    whitelist: [
      "DEBUG",
      "DB_CONNECTION_STRING",
      "DB_HOST",
      "DB_PORT",
      "DB_USER",
      "DB_PWD",
      "DB_NAME",
      "DB_SCHEMA",
      "DB_POOL_MIN",
      "DB_POOL_MAX",
    ],
  })
  .defaults({
    DB_HOST: "localhost",
    DB_NAME: `disputes_${env}`,
    DB_POOL_MAX: 1,
    DB_POOL_MIN: 1,
    DB_PORT: "5432",
    DB_PWD: "",
    DB_SCHEMA: "tdc_disputes",
    DB_USER: "postgres",
    DEBUG: false,
    IS_PROD: isProd,
    IS_TEST: isTest,
  });

const conf = nconf.get();

export default conf;

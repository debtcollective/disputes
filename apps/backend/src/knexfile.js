import {
  DB_CONNECTION_STRING,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PWD,
  DB_NAME,
  DB_POOL_MIN,
  DB_POOL_MAX
} from "./config";

module.exports = {
  client: "postgresql",
  connection: DB_CONNECTION_STRING || {
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PWD,
    database: DB_NAME
  },
  pool: {
    min: DB_POOL_MIN,
    max: DB_POOL_MAX
  }
};

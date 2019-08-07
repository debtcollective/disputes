import { knexSnakeCaseMappers } from "objection";
import path from "path";
import {
  DB_CONNECTION_STRING,
  DB_HOST,
  DB_NAME,
  DB_POOL_MAX,
  DB_POOL_MIN,
  DB_PORT,
  DB_PWD,
  DB_USER,
} from "./config";

module.exports = {
  client: "postgresql",
  connection: DB_CONNECTION_STRING || {
    database: DB_NAME,
    host: DB_HOST,
    password: DB_PWD,
    port: DB_PORT,
    user: DB_USER,
  },
  migrations: {
    directory: path.join(__dirname + "/knex/migrations"),
  },
  pool: {
    max: DB_POOL_MAX,
    min: DB_POOL_MIN,
  },
  seeds: {
    directory: path.join(__dirname + "/knex/seeds"),
  },
  ...knexSnakeCaseMappers(),
};

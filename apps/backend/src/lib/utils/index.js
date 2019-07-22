import Knex from "knex";
import { Model } from "objection";
import knexConfig from "$root/knexfile";
import _ from "lodash";

/**
 * Setup database connection for Objection.js
 */
export const setupDatabase = () => {
  const knex = Knex(knexConfig);
  Model.knex(knex);
};

/**
 * Run raw knex query to truncate all tables
 */
export const cleanDatabase = () => {
  const knex = Knex(knexConfig);
  const tables = ["disputes", "users"];

  return knex.raw(`TRUNCATE ${tables.join(", ")} CASCADE`);
};

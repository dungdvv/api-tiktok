import {
  DB_URL_DEVELOPMENT,
  DB_URL_PRODUCTION,
  DB_URL_TESTING,
} from "../config/constant";

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    debug: true,
    client: "pg",
    version: "15.0",
    // connection:
    //   "postgresql://postgres:Dung22122@@1@db.pdwnwvwcuduotbjasopq.supabase.co:5432/postgres",
    connection: DB_URL_DEVELOPMENT,
    pool: {
      min: 0,
      max: 15,
    },
    migrations: {
      directory: "./knex/migrations",
    },
    seeds: { directory: "./knex/seeds" },
  },

  testing: {
    client: "pg",
    version: "15.0",
    connection: DB_URL_TESTING,
    pool: {
      min: 0,
      max: 15,
    },
    migrations: {
      directory: "./knex/migrations",
    },
    seeds: { directory: "./knex/seeds" },
  },

  production: {
    client: "pg",
    version: "15.0",
    // connection:
    //   "postgresql://postgres:Dung22122@@1@db.pdwnwvwcuduotbjasopq.supabase.co:5432/postgres",
    connection: DB_URL_PRODUCTION,
    pool: {
      min: 0,
      max: 15,
    },
    migrations: {
      directory: "./knex/migrations",
    },
    seeds: { directory: "./knex/seeds" },
  },
};

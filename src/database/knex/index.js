import knex from "knex";

const knexfile = require("../knexfile");

const env = process.env.NODE_ENV || "development";
const configOptions = knexfile[env];

const database = knex(configOptions);

export default database;

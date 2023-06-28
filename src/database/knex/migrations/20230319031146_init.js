/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("user", (table) => {
    table.uuid("id").defaultTo(knex.raw("gen_random_uuid()")).primary();
    table.string("email").notNullable();
    table.string("username").notNullable();
    table.string("password").notNullable();
  });
  // return knex.schema
  //   .createTable("posts", (table) => {
  //     table.uuid("id").defaultTo(knex.raw("gen_random_uuid()")).primary();
  //     table.string("title").notNullable();
  //     table.string("slug").notNullable();
  //     table.string("content");
  //     table.string("tags");
  //     table.uuid("photoId"); // this is banner image of post
  //     table.timestamps(true, true);
  //   })
  //   .createTable("photos", (table) => {
  //     table.uuid("id").defaultTo(knex.raw("gen_random_uuid()")).primary();
  //     table.string("name");
  //     table.string("url");
  //     table.boolean("isDeleted").defaultTo(false);
  //   })
  //   .alterTable("posts", (table) => {
  //     table
  //       .foreign("photoId")
  //       .references("photos.id")
  //       .withKeyName("fk_key_photo");
  //   });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  // return knex.schema.dropTable("user");
  // .dropTable("posts").dropTable("photos");
};

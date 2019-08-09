exports.up = knex =>
  knex.schema.createTable("disputes", t => {
    t.increments().primary();
    t.string("tool_id");
    t.string("tool_version");
    t.integer("user_id").unsigned();
    t.jsonb("data").defaultTo("{}");
    t.boolean("draft").defaultTo(true);
    t.datetime("deleted_at");
    t.timestamps();

    t.index("deleted_at");

    t.foreign("user_id")
      .references("id")
      .inTable("users");
  });

exports.down = knex => knex.schema.dropTable("disputes");

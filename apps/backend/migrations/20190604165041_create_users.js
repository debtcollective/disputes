exports.up = knex =>
  knex.schema.createTable("users", t => {
    t.increments().primary();
    t.bigInteger("external_id")
      .unique()
      .notNullable();
    t.string("name");
    t.string("email");
    t.string("username");
    t.string("avatar_url");
    t.datetime("deleted_at");
    t.timestamps();

    t.index("deleted_at");
  });

exports.down = knex => knex.schema.dropTable("users");

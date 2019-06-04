exports.up = knex =>
  knex.schema.createTable("disputes", t => {
    t.increments().primary();
    t.string("tool_id");
    t.string("tool_version");
    t.timestamps();
  });

exports.down = knex => knex.schema.dropTable("disputes");

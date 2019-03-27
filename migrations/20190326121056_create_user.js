
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', table => {
      table.increments('id').primary()
      table.string('email').unique()
      table.string('first_name')
      table.string('last_name')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users')
  ])
};

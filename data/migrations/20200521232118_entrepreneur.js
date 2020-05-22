
exports.up = async function(knex) {
    await knex.schema.createTable("entrepreneur", (table) => {
        table.increments("id")
        table.string("username", 280).notNullable().unique()
        table.string("password", 280).notNullable()
        table.string("FirstName", 280)
        table.string("LastName", 280)
        table.string("address", 280)
        table.string("phone")
        table.string("email", 280)
    })
  }
  
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("entrepreneur")
  }
  
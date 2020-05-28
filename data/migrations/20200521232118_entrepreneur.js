
exports.up = async function(knex) {
    await knex.schema.createTable("entrepreneur", (table) => {
        table.increments("id")
        table.string("username", 280).notNull().unique()
        table.string("password", 280).notNull()
        table.string("FirstName", 280).notNull()
        table.string("LastName", 280).notNull()
        table.string("address", 280)
        table.string("phone").notNull()
        table.string("email", 280).notNull()
    })

    await knex.schema.createTable("backer", (table) => {
      table.increments("id")
      table.string("username", 280).notNull().unique()
      table.string("password", 280).notNull()
      table.string("FirstName", 280).notNull()
      table.string("LastName", 280).notNull()
      table.string("address", 280)
      table.string("phone").notNull()
      table.string("email", 280).notNull()
  })

    await knex.schema.createTable("projects", (table) => {
      table.increments("id")
      table.string("companyName").notNull().unique()
      table.string("projectName").notNull().unique()
      table.string("fundingAmount").notNull().unique()




    })
  }
  
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("entrepreneur")
    await knex.schema.dropTableIfExists("backer")
    await knex.schema.dropTableIfExists("projects")

  }
  
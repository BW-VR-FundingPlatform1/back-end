
exports.up = async function(knex) {
    await knex.schema.createTable("developer", (table) => {
        table.increments("id")
        table.string("username", 280).notNull().unique()
        table.string("password", 280).notNull()
        table.string("firstName", 280).notNull()
        table.string("lastName", 280).notNull()
        table.string("address", 280)
        table.string("phone").notNull()
        table.string("email", 280).notNull()
    })

    await knex.schema.createTable("backer", (table) => {
      table.increments("id")
      table.string("username", 280).notNull().unique()
      table.string("password", 280).notNull()
      table.string("firstName", 280).notNull()
      table.string("lastName", 280).notNull()
      table.string("address", 280)
      table.string("phone").notNull()
      table.string("email", 280).notNull()
  })

    await knex.schema.createTable("myProjects", (table) => {
      table.increments("id")
      table.string("img").notNull()
      table.string("projectName").notNull().unique()
      table.string("fundingAmount").notNull()
    })

    await knex.schema.createTable("projectsToBack", (table) => {
      table.increments("id")
      table.string("img").notNull()
      table.string("companyName").notNull().unique()
      table.string("projectName").notNull().unique()
      table.string("fundingAmount").notNull()
    })
  }
  
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("entrepreneur")
    await knex.schema.dropTableIfExists("backer")
    await knex.schema.dropTableIfExists("myProjects")
    await knex.schema.dropTableIfExists("projectsToBack")


  }
  
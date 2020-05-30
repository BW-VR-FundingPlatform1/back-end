// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      user:'postgres',
      password:'coding7',
      database:'vr-funding'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {directory: './data/migrations'},
    seeds: {directory: "./data/seeds",},
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }
};

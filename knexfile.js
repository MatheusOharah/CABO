// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  production: {
    client: 'pg',
    connection: {
      host: 'dpg-cmg73o821fec739nmec0-a.oregon-postgres.render.com',
      port: 5432,
      user: 'matheusoharah',
      password: 'zZrh537zrfVKNI116dMBDDqLZp7j5KpK',
      database: 'db_wiki',
      ssl: true,
    },
  },

};

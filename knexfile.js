module.exports = {

	development: {
		client: 'sqlite3',
		connection: {
			filename: './database/db.db3'
		},
		useNullAsDefault: true,
		migrations: {
			directory: './database/migrations',
		},
		seeds: {
			directory: './database/seeds'
		},
	},
	production: {
		client: 'pg',
		connection: process.env.DATABASE_URL,
		migrations: {
			directory: './database/migrations',
		},
		seeds: {
			directory: './database/seeds'
		}
	}
}
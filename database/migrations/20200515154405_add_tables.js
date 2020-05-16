exports.up = function (knex) {
	return knex.schema.createTable('users', tbl => {
		tbl.increments();
		tbl.string('username').unique().notNullable();
		tbl.string('password').notNullable();
		tbl.string('profilePic');
		tbl.string('location').notNullable();
	})
		.createTable('tools', tbl => {
			tbl.increments();
			tbl.string('name').notNullable();
			tbl.string('toolImg');
			tbl.integer('price').notNullable();
			tbl.integer('borrowed').defaultTo(0).notNullable();
			tbl.string('borrowed_to').defaultTo(null)
			tbl.integer('ownerId').unsigned().notNullable().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
		})
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists('users').dropTableIfExists('tools');
};
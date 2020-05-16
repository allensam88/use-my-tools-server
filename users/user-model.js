const db = require('../database/db-config');

module.exports = {
	find,
	findById
}

function find() {
	return db('users').select('id', 'username', 'location')
}

function findById(id) {
	return db('users').where({ id }).first().select('id', 'username', 'location')
}
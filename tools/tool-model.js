const db = require('../database/db-config');

module.exports = {
	find,
	findUserTools,
	findById
}

function find() {
	return db('tools')
}

function findUserTools(id) {
	return db('tools').where({ ownerId: id });
}

function findById(id) {
	return db('tools').where({ id }).first();
}
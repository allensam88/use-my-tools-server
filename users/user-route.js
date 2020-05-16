const router = require('express').Router();
const db = require('../database/db-config');

const Users = require('./user-model');
const Tools = require('../tools/tool-model');

router.get('/', (req, res) => {
	Users.find()
		.then(users => res.status(200).json(users))
		.catch(err => res.status(500).json({ error: "Could not retrieve the users from the database" }))
})

router.get('/:id', (req, res) => {
	const id = req.params.id;
	Users.findById(id)
		.then(user => {
			if (user) {
				Tools.findUserTools(id)
					.then(tools => {
						res.status(200).json({ user, tools })
					})
					.catch(err => res.status(500).json({ error: "Error retrieving tools for that user " }))
			} else {
				res.status(404).json({ error: "Could not find a user with that ID" })
			}
		})
		.catch(err => res.status(500).json({ error: "Could not retrieve the users from the database" }))
})

router.put('/:id', (req, res) => {
	const { id } = req.params;
	const changes = req.body;

	return db('users')
		.where({ id })
		.update(changes).then(count => {
			if (count) {
				Users.findById(id)
					.then(user => {
						res.status(200).json(user)
					})
					.catch(err => res.status(404).json({ message: "Could not find user with the given ID" }))
			} else {
				res.status(404).json({ message: "Could not find user with the given ID" })
			}
		})
		.catch(err => {
			res.status(500).json({ message: "Failed to update the user" })
		})
})



module.exports = router;
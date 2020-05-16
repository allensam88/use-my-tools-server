const router = require('express').Router();
const db = require('../database/db-config');

const Tools = require('./tool-model');

router.get('/', (req, res) => {
	db.select('t.borrowed as Borrowed', 't.borrowed_to as BorrowedTo', 't.id as id', 't.name as Name', 't.price as Price', 't.toolImg as Image', 'u.username as Owner', 'u.location as Location')
		.from('tools as t')
		.join('users as u', 'u.id', '=', 't.ownerId')
		.then(list => res.status(200).json(list))
		.catch(err => res.status(500).json({ error: "Could not retrieve the tools from the database" }))
})

router.get('/:id', (req, res) => {
	Tools.findUserTools(req.params.id)
		.then(tools => res.status(200).json({ tools }))
		.catch(err => res.status(500).json({ error: "Could not find a tool with that ID" }))
})

router.put('/update/:id', (req, res) => {
	const changes = req.body;

	Tools.findById(req.params.id).update(changes)
		.then(tool => res.status(200).json(tool))
		.catch(err => res.status(500).json({ error: "Could not update that tool" }))
})

router.post('/', (req, res) => {
	const newTool = req.body;

	if (!newTool.name) {
		res.status(400).json({ error: "You must provide a name for the tool" })
	} else if (!newTool.price) {
		res.status(400).json({ error: "You must provide a price for the tool" })
	} else if (!newTool.ownerId) {
		res.status(400).json({ error: "You must the ownerId of the tool" })
	} else {
		db('tools').insert(newTool)
			.then(ids => {
				res.status(201).end();
			})
			.catch(err => res.status(500).json({ error: "Failed to add the tool to the database" }))
	}
})

router.delete('/:id', (req, res) => {
	db('tools').where({ id: req.params.id })
		.del()
		.then(count => {
			if (count > 0) {
				res.status(204).end();
			} else {
				res.status(404).json({ message: "Tool with that ID not found" })
			}
		})
		.catch(err => res.status(500).json({ error: "Error deleting tool from database" }))
})



module.exports = router;
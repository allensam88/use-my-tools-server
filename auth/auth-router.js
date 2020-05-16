const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const db = require('../database/db-config');

router.post('/register', (req, res) => {
	let user = req.body;

	if (!user.username) {
		res.status(400).json({ error: "Please provide a username" })
	} else if (!user.password) {
		res.status(400).json({ error: "Please provide a password" })
	} else {
		const hash = bcrypt.hashSync(user.password, 10);
		user.password = hash;
		db('users').insert(user)
			.then(user => {
				res.status(201).json(user)
			})
			.catch(err => res.status(500).json({ error: "Could not register the user to the DB" }))
	}
})

router.post('/login', (req, res) => {
	let { username, password } = req.body;

	db('users').where({ username })
		.first()
		.then(user => {
			if (user && bcrypt.compareSync(password, user.password)) {
				const token = getJwtToken(user.username);
				res.status(200).json({
					token,
					username: username,
					id: user.id,
					status: 'Logged In!'
				})
			} else {
				res.status(401).json({ error: "Invalid Credentials" })
			}
		})
		.catch(err => res.status(500).json({ message: "Error logging in", error: err }))
})


function getJwtToken(username) {
	const payload = { username };
	const secret = process.env.JWT_SECRET;
	const options = { expiresIn: '1d' };

	return jwt.sign(payload, secret, options)
}

module.exports = router;
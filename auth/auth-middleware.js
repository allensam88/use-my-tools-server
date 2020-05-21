const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'keep it secret, keep it safe!'

module.exports = (req, res, next) => {
	const token = req.headers.authorization;

	if (token) {
		jwt.verify(token, secret, (err, decodedToken) => {
			if (err) {
				res.status(401).json({ message: "invalid credentials" })
			} else {
				req.decodedToken = decodedToken;
				next();
			}
		})
	} else {
		res.status(400).json({ message: "No credentials provided" })
	}
}
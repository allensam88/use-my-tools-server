const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('../auth/auth-router');
const userRouter = require('../users/user-route');
const toolRouter = require('../tools/tool-route');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/users', userRouter);
server.use('/tools', toolRouter);

server.get("/", (req, res) => {
	res.status(200).json({ api: "up", dbenv: process.env.DB_ENV || "development" });
});

module.exports = server;
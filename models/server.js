const express = require('express');
const cors = require('cors');
const routerUsers = require('../routes/users.routes');
const { dbConnection } = require('../database/config');

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;

		// DB
		this.connectDB();

		// Path
		this.usersPath = '/api/users';
		// Middleware
		this.middlewares();
		// Routes
		this.routes();
	}

	async connectDB (){
		await dbConnection();
	}

	middlewares() {
		this.app.use(cors());
		this.app.use(express.static('public'));
		this.app.use(express.json());
	}

	// Routes
	routes() {
		this.app.use(this.usersPath, routerUsers);
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log(`server in ${this.port}`);
		});
	}
}

module.exports = Server;

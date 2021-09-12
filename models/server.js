const express = require('express');
const cors = require('cors');
const routerUsers = require('../routes/users.routes');
const routerCategories = require('../routes/category.routes');
const routerProducts = require('../routes/product.routes');
const { dbConnection } = require('../database/config');
const path = require('path');
class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;

		// DB
		this.connectDB();

		// Path
		this.usersPath = '/api/users';
		this.categoriesPath = '/api/category';
		this.salesPath = '/api/sale';
		this.productPath = '/api/products';

		// Middleware
		this.middlewares();
		
		// Routes
		this.routes();

        // Other Routes
        this.app.get('*', (req, res)=> {
            res.sendFile(path.resolve(__dirname,'../public/index.html'))
        })        
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
		this.app.use(this.categoriesPath, routerCategories);
		this.app.use(this.productPath, routerProducts);
        
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log(`server in ${this.port}`);
		});
	}
}

module.exports = Server;

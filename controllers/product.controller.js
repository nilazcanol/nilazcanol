const { response, request } = require('express');
const Product = require('../models/product');
const Category = require('../models/category');




const productGet = async (req = request, res = response) => {

    const { limit = 5, since = 0 } = req.query;

    const [total, products] = await  Promise.all([
		Product.countDocuments(),
		Product.find().limit(Number(limit)).skip(Number(since))
	])

	res.json({  
		total,
		products,
	});
};

const productPost = async (req = request, res = response) => {


	const { name, description, price, stock, state, category , img, ...resto } = req.body;
	
    const product = new Product({ name, description, price, stock, state, img, category });


	const existProduct = await Product.findOne({ name });

    const existCategory = await Category.findById({ _id:category });


	if ( existProduct ) {
		return res.status(400).json({
			msg: 'Product is already registered',
		});
	}
    
	if ( !existCategory ) {
		return res.status(400).json({
			msg: 'Category o registered letter',
		});
	}


	
	product.save();

	res.json({  
		msg: 'Product saved correctly',
		product,
	});
};

module.exports = { productGet,productPost }
const { response, request } = require('express');
const Product = require('../models/product');
const Category = require('../models/category');




const productGet = async (req = request, res = response) => {

    const { limit = 5, since = 0 } = req.query;

    const [total, productsPromise] = await  Promise.all([
		Product.countDocuments(),
		Product.find().limit(Number(limit)).skip(Number(since))
	])

    const products = await Promise.all(
        productsPromise.map( async (product)=>{
            const {name}= await Category.findById(product.category);
            return {
                "img": product.img,
                "state": product.state,
                "_id": product._id,
                "name": product.name,
                "description": product.description,
                "price": product.price,
                "stock": product.stock,
                "category": name
            }
        }) 
    ) 

    
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
			msg: 'category does not exist',
		});
	}


	
	product.save();

	res.json({  
		msg: 'Product saved correctly',
		product,
	});
};


const productPut = async (req = request, res = response) => {
		
	const { id } = req.params;
	const { name, description, price, stock, state, category , img, ...resto } = req.body;
	

	const product = await Product.findByIdAndUpdate(id, {name, description, price, stock, state, category , img});
	
	res.json({
		status: true,
		product,
	});
};

const productDelete = async (req = request, res = response) => {
	const { id } = req.params;
	
	const product = await Product.findByIdAndDelete(id);
	
	res.json({
		status: true,
		product
	})
};

module.exports = { productGet, productPost, productPut, productDelete }
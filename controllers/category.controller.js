const { response, request } = require('express');
const Category = require('../models/category');


const categoryGet = async (req = request, res = response) => {

	const { limit = 5, since = 0 } = req.query;

	const [total, categories] = await  Promise.all([
		Category.countDocuments(),
		Category.find().limit(Number(limit)).skip(Number(since))
	])

	res.json({
		total,
		categories		
	});
};

const categoryPost = async (req = request, res = response) => {


	const { name, ...resto } = req.body;
	const category = new Category({ name });

	const existCategory = await Category.findOne({ name });

	if ( existCategory ) {
		return res.status(400).json({
			msg: 'Category is already registered',
		});
	}
	
	category.save();

	res.json({  
		msg: 'Category saved correctly',
		category,
	});
};

module.exports = { categoryGet, categoryPost }
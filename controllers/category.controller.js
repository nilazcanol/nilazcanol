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

const categoryPut = async (req = request, res = response) => {
		
	const { id } = req.params;
	const { _id, name, ...resto } = req.body;
	

	const category = await Category.findByIdAndUpdate(id, {name});
	
	res.json({
		status: true,
		category,
	});
};

const categoryDelete = async (req = request, res = response) => {
	const { id } = req.params;
	
	const category = await Category.findByIdAndDelete(id);
	
	res.json({
		status: true,
		category
	})
};

module.exports = { categoryGet, categoryPost, categoryPut, categoryDelete }
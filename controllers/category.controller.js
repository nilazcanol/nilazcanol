const { response, request } = require('express');
const Category = require('../models/category');
const Product = require('../models/product');

const categoryGet = async (req = request, res = response) => {
	const [total, categories] = await Promise.all([
		Category.countDocuments(),
		Category.find(),
	]);

	res.json({
		total,
		categories,
	});
};

const getCategoryByID = async (req = request, res = response) => {
	const { id } = req.params;
	const category = await Category.findById(id);

	res.json({
		category: category.name,
	});
};

const categoryPost = async (req = request, res = response) => {
	const { name, ...resto } = req.body;
	const category = new Category({ name });

	const existCategory = await Category.findOne({ name });

	if (existCategory) {
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

	const category = await Category.findByIdAndUpdate(id, { name });

	res.json({
		status: true,
		category,
	});
};

const categoryDelete = async (req = request, res = response) => {
	const { id } = req.params;

	const categorySelected = await Product.find({ category: id });

	if (categorySelected.length > 0) {
		return res.json({
			status: false,
            categorySelected
		});
	}
	const category = await Category.findByIdAndDelete(id);
	res.json({
		status: true,
		category
	});
};

module.exports = {
	categoryGet,
	categoryPost,
	categoryPut,
	categoryDelete,
	getCategoryByID,
};

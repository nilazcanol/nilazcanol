const Product = require('../models/product');
const Category = require('../models/category')

const existProductById = async  (id = '') => {

    const exist = await Product.findOne({uid:id})
	if( !exist ){
		throw new Error(`The Product with ID ${id} does not exist`);		
	}
} 
const existCategoryById = async  (id = '') => {

    const exist = await Category.find({_id: id})
	if( !exist ){
		throw new Error(`The Category with id ${id} does not exist`);		
	}
} 


module.exports = {
    existProductById,
	existCategoryById
}
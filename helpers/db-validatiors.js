const Product = require('../models/product');


const existProductById = async  (id = '') => {

    const exist = await Product.findOne({uid:id})
	if( !exist ){
		throw new Error(`The Product with ID ${id} does not exist`);		
	}
} 


module.exports = {
    existProductById
}
const { Schema, model } = require('mongoose');

const saleSchema = Schema({
	total: {
		type: Number,
		required: [true, 'The total item is required'],
		default: Date.now,
	},
	date: {
		type: Date,
		required: [true, 'The sale date is required'],
	},
	products: [
		{
			product: {
				type: Schema.Types.ObjectId,
				ref: 'product',
			},
            amount:{
                type:Number
            }
		},
	],
});

module.exports = model('sale', saleSchema);

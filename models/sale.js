
const { Schema, model } = require('mongoose');

const saleSchema = Schema({
    

   
    totalSale : {
        type: Number,
        required: [true, 'The total item is required' ]
    },
    saleDate : {
        type: String,
        required: [true,'The sale date is required']
    },
   
    
});

module.exports = model( 'sale',saleSchema )
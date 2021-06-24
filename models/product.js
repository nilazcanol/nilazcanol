
const { Schema, model } = require('mongoose');

const productSchema = Schema({
    
    name : {
        type: String,
        required: [true, 'The name is required' ]
    },
    description : {
        type: String,
        required: [true, 'The mail is required' ],
        unique : true
    },
    price : {
        type: Number,
        required: [true, 'The password is required' ]
    }, 
    img : {
        type: String,
        required: false,
        default: "https://www.idelcosa.com/img/default2.png"
    }, 
    stock : {
        type: Number,
        required: [true, 'The password is required' ]
        
    },
    category : {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    state : {
        type: Boolean,
        default: true
    }
   
    
});

module.exports = model( 'product',productSchema )
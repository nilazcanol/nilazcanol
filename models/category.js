const { Schema, model } = require('mongoose');

const CategorySchema = Schema({
    name: {
        type: String,
        required: [true,'The name is required']
    }
  
})

CategorySchema.methods.toJSON = function(){
    const { _id  ,__version, ...category } = this.toObject();
    category.uid = _id
    return category
}

module.exports = model('Category',CategorySchema)
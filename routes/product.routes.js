const { Router } = require('express');
const {	productGet, productPost, productPut,productDelete } = require('../controllers/product.controller');
const { validateFields } =require('../middlewares');
const { check } = require('express-validator')


const routerProduct = Router();

routerProduct.get(`/`, productGet);
routerProduct.post(`/`,[
    check('name','The name is required').not().isEmpty(),
    check('img' ,'The img is required').not().isEmpty(),
    check('description' ,'The description is required').not().isEmpty(),
    check('description','The description must have more than 6 letters').isLength({ min:6 }),
    check('price' ,'The price is required').not().isEmpty(),
    check('price','The price must have more than 3 letters').isLength({ min:3 }),
    check('stock' ,'The stock is required').not().isEmpty(),
    check('category' ,'The category is required').not().isEmpty(),
    validateFields
] , productPost);
routerProduct.put(`/:id`, productPut);
routerProduct.delete(`/:id`, productDelete);


module.exports = routerProduct;

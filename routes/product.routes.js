const { Router } = require('express');
const {	productGet, productPost, productPut,productDelete } = require('../controllers/product.controller');



const routerProduct = Router();

routerProduct.get(`/`, productGet);
routerProduct.post(`/`, productPost);
routerProduct.put(`/:id`, productPut);
routerProduct.delete(`/:id`, productDelete);


module.exports = routerProduct;

const { Router } = require('express');
const {	productGet, productPost, productPut } = require('../controllers/product.controller');



const routerProduct = Router();

routerProduct.get(`/`, productGet);
routerProduct.post(`/`, productPost);
routerProduct.put(`/:id`, productPut);


module.exports = routerProduct;

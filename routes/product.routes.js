const { Router } = require('express');
const {	productGet, productPost } = require('../controllers/product.controller');



const routerProduct = Router();

routerProduct.get(`/`, productGet);
routerProduct.post(`/`, productPost);


module.exports = routerProduct;

const { Router } = require('express');
const { saleGet, saveSale } = require('../controllers/sale.controller');
const { validateFields } =require('../middlewares');
const { check } = require('express-validator')



const routerSales = Router();

routerSales.get(`/`, saleGet);

routerSales.post('/save',[
    check('totalSale', ' the total sale is required').isDecimal(),
    check('totalSale', ' the total sale is required').not().isEmpty(),
    check('saleDate' , ' the total sale is required').isString(),
    check('saleDate' , ' the total sale is required').not().isEmpty(),
    validateFields
],
saveSale)

module.exports = routerSales;

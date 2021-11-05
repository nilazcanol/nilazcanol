const { Router } = require('express');
const { saleGet, saveSale } = require('../controllers/sale.controller');
const { validateFields } =require('../middlewares');
const { check } = require('express-validator')
const { isAdminRole,hasRole } = require('../middlewares/validate-roles');
const { validateJWT } = require('../middlewares/validate-jwt');



const routerSales = Router();

routerSales.get(`/`,[
    validateJWT,
    hasRole('ADMIN_ROLE','EMPLOYEE_ROLE'),
] ,saleGet);

routerSales.post('/save',[
    validateJWT,
    hasRole('ADMIN_ROLE','EMPLOYEE_ROLE'),
    check('totalSale', ' the total sale it must be decimal').isDecimal(),
    check('totalSale', ' the total sale is required').not().isEmpty(),
    check('saleDate' , ' the total sale it must be String').isString(),
    check('saleDate' , ' the total sale is required').not().isEmpty(),
    validateFields
],
saveSale)

module.exports = routerSales;

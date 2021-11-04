const { Router } = require('express');
const { validateFields } =require('../middlewares');
const { check } = require('express-validator');
const { login, revalidateToken } = require('../controllers/auth.controller');
const { validateJWT } = require('../middlewares/validate-jwt');



const routerAuth = Router();

routerAuth.post('/login',[
    check('email', ' You must ingregate a valid email').isEmail(),
    check('password', ' the total sale is required').not().isEmpty(),
    validateFields
],
login)

routerAuth.get('/renew',validateJWT,revalidateToken);

module.exports = routerAuth;

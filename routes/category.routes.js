const { Router } = require('express');
const {	categoryGet, categoryPost,categoryPut, categoryDelete, getCategoryByID } = require('../controllers/category.controller');
const { check } = require('express-validator')
const { existCategoryById } = require('../helpers/db-validatiors');
const { validateFields } =require('../middlewares');
const { isAdminRole,hasRole } = require('../middlewares/validate-roles');
const { validateJWT } = require('../middlewares/validate-jwt');



const routerCategory = Router();

routerCategory.get(`/`, [
    validateJWT,
    hasRole('ADMIN_ROLE','EMPLOYEE_ROLE')
],categoryGet);

routerCategory.get(`/:id`, [
    validateJWT,
    hasRole('ADMIN_ROLE','EMPLOYEE_ROLE')
], getCategoryByID);

routerCategory.post(`/`,[
    validateJWT,
    hasRole('ADMIN_ROLE','EMPLOYEE_ROLE'),
    check('name','The name is required').not().isEmpty(),
    check('name','The name must be a string').isString(),
    validateFields
], categoryPost);


routerCategory.put(`/:id`,[
    validateJWT,
    hasRole('ADMIN_ROLE','EMPLOYEE_ROLE'),
    check('id','It is not a valid ID').isMongoId(),
    check('id').custom(existCategoryById),
    validateFields
], categoryPut);


routerCategory.delete(`/:id`,[
    validateJWT,
    hasRole('ADMIN_ROLE','EMPLOYEE_ROLE'),
    check('id','It is not a valid ID').isMongoId(),
    check('id').custom(existCategoryById),
    validateFields
],categoryDelete);

module.exports = routerCategory;

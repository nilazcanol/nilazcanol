const { Router } = require('express');
const {	categoryGet, categoryPost,categoryPut, categoryDelete } = require('../controllers/category.controller');
const { check } = require('express-validator')
const { existCategoryById } = require('../helpers/db-validatiors');
const { validateFields } =require('../middlewares');



const routerCategory = Router();

routerCategory.get(`/`, categoryGet);
routerCategory.post(`/`,[
    check('name','The name is required').not().isEmpty(),
    check('name','The name must be a string').isString(),
    validateFields
], categoryPost);


routerCategory.put(`/:id`,[
    check('id','It is not a valid ID').isMongoId(),
    check('id').custom(existCategoryById),
    validateFields
], categoryPut);


routerCategory.delete(`/:id`,[
    check('id','It is not a valid ID').isMongoId(),
    check('id').custom(existCategoryById),
    validateFields
],categoryDelete);

module.exports = routerCategory;

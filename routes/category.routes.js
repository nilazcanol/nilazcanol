const { Router } = require('express');
const {	categoryGet, categoryPost,categoryPut, categoryDelete } = require('../controllers/category.controller');
const { check } = require('express-validator')



const routerCategory = Router();

routerCategory.get(`/`, categoryGet);
routerCategory.post(`/`,[
    check('name','The name is required').not().isEmpty(),
    check('name','The name must be a string').isString(),
    validateFields
], categoryPost);
routerCategory.put(`/:id`, categoryPut);
routerCategory.delete(`/:id`, categoryDelete);

module.exports = routerCategory;

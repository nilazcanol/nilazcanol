const { Router } = require('express');
const {	categoryGet, categoryPost,categoryPut, categoryDelete } = require('../controllers/category.controller');



const routerCategory = Router();

routerCategory.get(`/`, categoryGet);
routerCategory.post(`/`, categoryPost);
routerCategory.put(`/:id`, categoryPut);
routerCategory.delete(`/:id`, categoryDelete);

module.exports = routerCategory;

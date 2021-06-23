const { Router } = require('express');
const {	categoryGet, categoryPost,categoryPut, categoryDelete } = require('../controllers/category.controller');



const routerUsers = Router();

routerUsers.get(`/`, categoryGet);
routerUsers.post(`/`, categoryPost);
routerUsers.put(`/:id`, categoryPut);
routerUsers.delete(`/:id`, categoryDelete);

module.exports = routerUsers;

const { Router } = require('express');
const {	categoryGet, categoryPost,categoryPut } = require('../controllers/category.controller');



const routerUsers = Router();

routerUsers.get(`/`, categoryGet);
routerUsers.post(`/`, categoryPost);
routerUsers.put(`/:id`, categoryPut);

module.exports = routerUsers;

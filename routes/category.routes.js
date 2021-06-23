const { Router } = require('express');
const {	categoryGet, categoryPost } = require('../controllers/category.controller');



const routerUsers = Router();

routerUsers.get(`/`, categoryGet);
routerUsers.post(`/`, categoryPost);

module.exports = routerUsers;

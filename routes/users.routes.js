const { Router } = require('express');
const {
	userGet,
	userPut,
	userPost,
	userDelete,
} = require('../controllers/users.controller');

const routerUsers = Router();

routerUsers.get(`/`, userGet);

routerUsers.put(`/:id`, userPut);

routerUsers.post(`/`, userPost);

routerUsers.delete(`/:id`, userDelete);

module.exports = routerUsers;

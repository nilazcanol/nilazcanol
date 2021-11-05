const { Router } = require('express');
const { check } = require('express-validator');
const {
	userGet,
	userPut,
	userPost,
	userDelete,
} = require('../controllers/users.controller');
const { validateFields } = require('../middlewares');
const { validateJWT } = require('../middlewares/validate-jwt');
const { isAdminRole, hasRole } = require('../middlewares/validate-roles');

const routerUsers = Router();

routerUsers.get(
	`/`,
	[validateJWT, hasRole('ADMIN_ROLE')],
	userGet
);

routerUsers.put(
	`/:id`,
	[
		validateJWT,
		isAdminRole,
		hasRole('ADMIN_ROLE'),
		check('id', 'It is not a valid ID').isMongoId(),
	],
	userPut
);

routerUsers.post(`/`, [], userPost);

routerUsers.delete(
	`/:id`,
	[
		// validateJWT,
		// isAdminRole,
		// hasRole('ADMIN_ROLE'),
		check('id', 'It is not a valid ID').isMongoId(),
		validateFields,
	],
	userDelete
);

module.exports = routerUsers;

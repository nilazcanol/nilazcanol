const { response, request } = require('express');

const userGet = (req = request, res = response) => {
	const {lastname,name} = req.query;
	res.json({
		msg: 'get success',
		lastname,
		name
	});
};
const userPut = (req = request, res = response) => {
	const id = req.params.id;
	res.json({
		msg: 'put success',
		id
	});
};
const userPost = (req = request, res = response) => {
	const {name,edad} = req.body;
	res.json({
		msg: 'post success',
		name,edad
	});
};
const userDelete = (req = request, res = response) => {
	res.json({
		msg: 'delete success',
	});
};

module.exports = {
	userGet,
    userPut,
    userPost,
    userDelete
};

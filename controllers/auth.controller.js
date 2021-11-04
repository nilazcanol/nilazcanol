const { response, request } = require('express');
const Users = require('../models/users');
const {generateJWT} = require('../helpers/generate-jwt');
const bcryptjs = require('bcryptjs');

const login = async (req = request, res = response) => {
	const { email, password } = req.body;
	try {
		const user = await Users.findOne({ email });

		if (!user) {
			return res.status(400).json({
				msg: 'User and password are invalid ',
			});
		
        }
		if (user.status == false) {
			return res.status(400).json({
				msg: 'User and password are invalid ',
			});
		}

        const validPassword = bcryptjs.compareSync(password,user.password);

    	if (!validPassword) {
			return res.status(400).json({
				msg: 'User and password are invalid ',
			});
		}

        const token = await generateJWT( user.id);

		res.json({
            user,
            token,
            "status":true
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			msg: 'There was a mistake talks with the administrator',
		});
	}
};


const revalidateToken = async (req = request, res =response)=>{


    const token = await generateJWT(req.user._id, req.user.name)
    return res.status(200).json({

        "status": true,
        token
    })
    
}

module.exports = {
	login,
    revalidateToken
};

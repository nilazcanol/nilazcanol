const { response, request } = require('express');
const jwt = require('jsonwebtoken');
const Users = require('../models/users')

const validateJWT = async (req = request, res = response,next ) => {

    const token = req.header('x-token');
    if(!token){
        return res.status(401).json({
            msg:'The Token is required'
        })
    }
    try {
        const { uid } = jwt.verify(token,process.env.SECRET_OR_PRIVATE_KEY);

        const user = await Users.findById(uid);

        if(!user){
            return res.status(401).json({
                msg:"The user is not registered"
            })
        }
        if(!user.state){
            return res.status(401).json({
                msg:"The Token is not valid"
            })
        }

        req.user = user;
        
        next()
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg:'Token is not valid',
            status:false
        })
    }

}

module.exports = {
    validateJWT
}
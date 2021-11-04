const { response, request } = require('express');

const isAdminRole = (req = request, res = response, next) => {
	
	if (!req.user) {
        return res.status(500).json({
            msg:'You want to validate the role without validating the token previously'
        })
    }
    const {rol,name} = req.user;
    if(rol !== 'ADMIN_ROLE'){
        return res.status(401).json({
            msg:`${name}  has no permission to perform this action`
        })
    };

    next();
};

const hasRole = (...roles) => {
	
	return (req = request, res = response, next)=>{
        if (!req.user) {
            return res.status(500).json({
                msg:'You want to validate the role without validating the token previously'
            })
        }
        const {rol,name} = req.user;
        if(!roles.includes(rol)){
            return res.status(401).json({
                msg:`${name}  has no permission to perform this action`
            })
        };
        next();
    }
};

module.exports = {
	isAdminRole,
    hasRole
};

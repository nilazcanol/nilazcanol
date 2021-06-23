
const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    
    name : {
        type: String,
        required: [true, 'The name is required' ]
    },
    email : {
        type: String,
        required: [true, 'The mail is required' ],
        unique : true
    },
    password : {
        type: String,
        required: [true, 'The password is required' ]
    }, 
    img : {
        type: String        
    },
    rol : {
        type: String,
        required: [true, 'The role is required' ],
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    state : {
        type: Boolean,
        default: true
    }
   
    
});

module.exports = model( 'User',UserSchema )
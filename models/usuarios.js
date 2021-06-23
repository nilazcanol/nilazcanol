
const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    
    nombre : {
        type: String,
        required: [true, 'The name is required' ]
    },
    correo : {
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
    role : {
        type: String,
        required: [true, 'The role is required' ],
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    state : {
        type: Boolean,
        default: true
    },
    google : {
        type: Boolean,
        default: false
    },
    
});

module.exports = model( 'Usuario',UsuarioSchema )
const mongoose = require('mongoose')

const userShema = mongoose.Schema({
    name: {
        type: String,
        required: [true,'El nombre es Obligatorio'],
        trim: true,
    },
    email: {
        type: String,
        required: [true,'El correo electrónico es Obligatorio'],
        unique: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            'Por favor, proporciona un correo electrónico válido',
        ],
    },
    password: {
        type: String,
        required: [true,'La contraseña es Obligatoria'],
        minlength: [6,'La contraseña debe tener minimo 6 caracteres'],
    },
    rol: {
        type: String,
        enum: ['User','Admin'],
        default: 'User'
    },
    isActive: {
        type: Boolean,
        default: true,
    },
},
{
    timestamps: true,
})

module.exports = mongoose.model('Users', userShema)

/*
createdAt: {
    type: Date,
    default: new Date()
},*/
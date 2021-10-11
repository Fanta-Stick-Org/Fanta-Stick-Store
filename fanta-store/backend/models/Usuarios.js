var mongoose = require('mongoose');
const { Schema } = mongoose;

const UsuariosSchema = new Schema({

    nombre: {
        type: String,
        // required: true
    },

    apellido: {
        type: String,
        // required: true
    },

    telefono: {
        type: String,
        // required: true
    },

    nacimiento: {
        type: Date,
        // required: true
    },
    correo: {
        type: String,
        // required: true
    },
    contraseña: {
        type: String,
        // required: true
    }
    //   created: {
    //     type: Date,
    //     default: new Date()
    //   }

},
    // {
    //     timestamps: true
    // },
    {
        collection: 'usuarios'
    }

)

module.exports = mongoose.model('usuarios', UsuariosSchema)
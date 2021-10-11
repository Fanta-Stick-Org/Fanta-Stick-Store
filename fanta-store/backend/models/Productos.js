var mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductsSchema = new Schema({

    idProducto: {
        type: String,
        // required: true
      },

    descripcion: {
        type: String,
        // required: true
      },

    valorUnitario: {
        type: String,
        // required: true
      },

    estado: {
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
        collection: 'productos'
    }

)

module.exports = mongoose.model('productos', ProductsSchema)
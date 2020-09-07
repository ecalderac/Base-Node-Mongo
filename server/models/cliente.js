const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
let Schema = mongoose.Schema;

let clienteSchema = new Schema({

    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    rut: { type: String, required: [true, 'El rut es necesario'], unique: true },
    email: { type: String, required: [true, 'El correo es necesario'], unique: true },
    telefono: { type: Number, required: true },
    direccion: { type: String, required: true }

});

clienteSchema.plugin(uniqueValidator, { message: '{PATH} debe ser único' });

module.exports = mongoose.model('Cliente', clienteSchema);
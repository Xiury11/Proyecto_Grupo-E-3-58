const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    nombre: String,
    apellido: String,
    correo: {type: String, unique: true},
    telefono: Number,
    contraseña: String,
    imagen: String
})


module.exports = mongoose.model('user', userSchema);
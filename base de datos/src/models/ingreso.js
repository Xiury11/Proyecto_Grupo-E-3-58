const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');


const ingresoSchema = new Schema({
    
    valor: String,
    descripcion: String,
    clasificacion: {type: String,enum:["salario","arriendo","otro"]},
    
})


module.exports = mongoose.model('ingreso', ingresoSchema);
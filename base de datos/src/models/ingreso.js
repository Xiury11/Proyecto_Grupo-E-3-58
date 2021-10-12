const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');


const ingresoSchema = new Schema({
    
    valor_i: String,
    descripcion_i: String,
    clasificacion_i: {type: String,enum:["salario","arriendo","otro"]},
    
})


module.exports = mongoose.model('ingreso', ingresoSchema);
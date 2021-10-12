const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gastoSchema = new Schema({
    
    valor_g: String,
    clasificacion_g: {type: String,enum:["alimentacion","vivienda","servicios","transporte","aseo","antojos","otros"]},
    descripcion_g: String,
    tipo_g: {type: String,enum:["fijo","variable"]},
    fecha: Date
})


module.exports = mongoose.model('gasto', gastoSchema);
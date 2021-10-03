const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gastoSchema = new Schema({
    //id_user: Number,
    valor: String,
    clasificacion: {type: String,enum:["alimentacion","vivienda","servicios","transporte","aseo","antojos","otros"]},
    descripcion: String,
    tipo: {type: String,enum:["fijo","variable"]},
    fecha: Date
})


module.exports = mongoose.model('gasto', gastoSchema);
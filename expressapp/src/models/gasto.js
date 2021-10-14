const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gastoSchema = new Schema({
    
    valor: String,
    clasificacion: {type: String,enum:["Alimentación","Vivienda","Servicios","Transporte","Aseo","Antojos","Otros"]},
    descripcion: String,
    tipo: {type: String,enum:["Fijo","Variable"]},
    fecha: {type: Date}
})


module.exports = mongoose.model('gasto', gastoSchema);
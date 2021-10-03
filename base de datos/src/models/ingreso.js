const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingresoSchema = new Schema({
    //id_user: Number,
    valor: String,
    descripcion: String,
    clasificacion: {type: String,enum:["salario","arriendo","otro"]}
})


module.exports = mongoose.model('ingreso', ingresoSchema);
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const indexRoutes = require('./routes/index');
const cors = require('cors');
//const port = 3000; PUERTO FIJO 3000
//Ajuste para valores mas globales

//configuraciones
app.set('port', process.env.PORT || 3000);

//configuraciones
//mongoose.connect('mongodb+srv://root:toor@cluster0.kqsyc.mongodb.net/Cluster0?retryWrites=true&w=majority')
mongoose.connect('mongodb+srv://GrupoE358:853EopurG@cluster0.r338r.mongodb.net/Cluster0?retryWrites=true&w=majority')
.then(db => console.log('Connected'))
.catch(err => console.log(err));

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));//enviar petición por urlencoded
app.use(cors())

//rutas
app.use('/', indexRoutes);


//inicializacion de server puerto fijo
//app.listen(port, ()=>{
//    console.log('Server started!');
//});

//traemos el puerto o propiedad solicitada
app.listen(app.get('port'), ()=>{
    console.log('Server started!');
});
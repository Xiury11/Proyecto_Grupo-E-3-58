const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const mongoose = require('mongoose');
const app = express();
const indexRoutes = require('./routes/index');
//const port = 3000;

//configuraciones
app.set('port',process.env.PORT || 3000);
mongoose.connect('mongodb+srv://GrupoE358:853EopurG@cluster0.r338r.mongodb.net/Cluster0?retryWrites=true&w=majority')//url
.then(db => console.log('Connected'))
.catch(err => console.log(err));


//middlewars
app.use(morgan('dev'));
app.use(cors());

//para que funcione el retorno de los datos
app.use(express.urlencoded({extended:false}));

//rutas
//pad para llamar una url
//app.use('/user/',indexRoutes);
//app.use('/ingreso/',indexRoutes);
//
app.use('/',indexRoutes);

//Inicialización del server
app.listen(app.get('port'),()=>{
    console.log('Server started');
});


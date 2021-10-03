const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const indexRoutes = require('./routes/index');
const port = 3000;

//configuraciones
mongoose.connect('mongodb+srv://root:toor@web01.7ohzq.mongodb.net/web01?retryWrites=true&w=majority')//url
.then(db => console.log('Connected'))
.catch(err => console.log(err));


//middlewars
app.use(morgan('dev'));
app.use(cors());

//para que funcione el retorno de los datos
app.use(express.urlencoded({extended:false}));

//rutas
//pad para llamar una url
app.use('/user/',indexRoutes);
app.use('/ingreso/',indexRoutes);
app.use('/gasto/',indexRoutes)

//Inicialización del server
app.listen(port,()=>{
    console.log('Server started');
});


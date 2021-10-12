const express = require('express');
const router = express.Router();
const authService = require('../services/auth.service');


const User = require('../models/user');
const Auth = require('../middlewars/authentication');
const Ingreso = require('../models/ingreso');
const Gasto = require('../models/gasto');


//routes
//traer datos de la base de datos
/*router.get('/',Auth, async (req,res)=>{
    const items = await Item.find();
    res.send(items);
})

//guardar elementos en la base de datos
router.post('/', async (req, res)=>{
    //res.send(new Item(req.body));
    const item = new Item(req.body); // función asincrona
    await item.save();
    res.send(item);
});
//solicitud de un item
router.get('/:id', async (req, res)=>{
    const item = await Item.findById(req.params.id);
    res.send(item);
});
*/
//----------Auth routes

//------------INGRESO A APLICACION WEB---------------------//
router.post('/login', async (req,res)=>{
    try {
        const { email, password } = req.body;
        if(!email || !password){
            return res.status(400).json('email ans password required');
        }
        let token = await authService.login(req.body);
        if(token){
            res.status(token.code).json(token);
        }
    } catch (error) {
        res.send(error);        
    }
});
//-----------REGITRO NUEVO USUARIO----------------------//
router.post('/register', async (req,res)=>{
    try {
        const user = new User(req.body);
        const userData = await authService.register(user);
        res.send(userData);
    } catch (error) {
        res.send(error)        
    }
});

//adicionar ingreso a un usuario
router.post('/ingreso', async (req, res)=>{
    const ingreso = new Ingreso(req.body);
    await ingreso.save();
    res.send(ingreso);
});

//retorna todos los ingresos de cada usuario
router.get('/ingreso', async (req,res) =>{
    const ingresos = await Ingreso.find();
    res.send(ingresos);
});

//adicionar gasto a un usuario
router.post('/gasto', async (req, res)=>{
    const gasto = new Gasto(req.body);
    await gasto.save();
    res.send(gasto);
});

//exportar modulos
module.exports = router;
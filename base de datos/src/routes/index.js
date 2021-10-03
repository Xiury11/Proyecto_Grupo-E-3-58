const express = require('express');
const user = require('../models/user');
const ingreso = require('../models/ingreso');
const gasto = require('../models/gasto');
const router = express.Router();

//traer los modelos
const User = require('../models/user');
const Ingreso = require('../models/ingreso');
const Gasto = require('../models/gasto');

//routes

//retorna todos los usuarios
router.get('/', async (req,res) =>{
    const users = await User.find();
    res.send(users);
});

//guardar cada usuario
router.post('/',async (req,res)=>{
    const user = new User(req.body);
    await user.save();
    res.send(user);
});

//devolver un user especifico
router.get('/:id', async (req, res)=>{
    const user = await User.findById(req.params.id);
    res.send(user);
});

//adicionar ingreso a un usuario
router.post('/ingreso/', async (req, res)=>{
    const ingreso = new Ingreso(req.body);
    await ingreso.save();
    res.send(ingreso);
});

//adicionar gasto a un usuario
router.post('/gasto/', async (req, res)=>{
    const gasto = new Gasto(req.body);
    await gasto.save();
    res.send(gasto);
});

module.exports = router;
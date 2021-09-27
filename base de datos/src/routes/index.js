const express = require('express');
const user = require('../models/user');
const router = express.Router();

//traer los modelos
const User = require('../models/user');

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
})

//devolver un user especifico
router.get('/:id', async (req, res)=>{
    const user = await User.findById(req.params.id);
    res.send(user);
})


module.exports = router;
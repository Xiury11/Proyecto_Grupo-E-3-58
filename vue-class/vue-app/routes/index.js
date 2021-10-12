const express = require('express');
const router = express.Router();


router.get('/', (req, res) =>{
   res.send('Sending data');
});

modeule.exports = router;
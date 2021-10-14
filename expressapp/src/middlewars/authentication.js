const jwt = require('jsonwebtoken');

const Authorized = (req,res,next)=>{
    const token = req.header('x-auth-token')
    if(!token){
        res.status(403).json({msg:"unuathorized"})
    }
    try {
        const decoded = jwt.verify(token,'my App')
        req.user = decoded
        next()
    } catch (error) {
        res.status(400).json({msg: 'invalid token'})
    }
}

module.exports = Authorized
var jwt = require('jsonwebtoken');

const fetchUser = (req,res,next)=>{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error : "Please Authenticate using a valid user"});
    }
    try {
        const data = jwt.verify(token,process.env.JWT_STRING);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({error : "Please Authenticate using a valid user"});
    }
    
}
module.exports = fetchUser;
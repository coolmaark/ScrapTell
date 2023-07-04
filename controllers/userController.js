const User = require("../models/UserData");
const bcryptjs = require("bcryptjs");
const securepassword = async(password)=>{
    try{
        const hashpassword = await bcryptjs.hash(password,10);
        return hashpassword;
    }catch(err){
        res.status(400).send(err.message);
    }
}
const register_user = async(req,res)=>{
    try{
        const spassword = await securepassword(req.body.password);


        const user = new User({
            Username : req.body.username,
            Email : req.body.email,
            Password : spassword,
            type : 0
        });

        const userData = await User.findOne({Email:req.body.email});

        if(userData){
            res.status(400).send({sucess:false,message : "This Email Already Exists"});
        }
        else{
            const user_save = await user.save();
            res.status(200).send({sucess:true, data:user_save});
        }
    }
    catch(err){
        res.status(400).send(err.message);
    }
}


module.exports = {
    register_user
}
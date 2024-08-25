const User = require('../models/userModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.createUser = async (req,res)=>{
    try{
    const {name,email,password,userType} = req.body;
    const hashedPassword = await bcrypt.hash(password,10);
    const user = await User.create({name,email,password:hashedPassword,userType});
    res.status(201).json(user);
    }
    catch(err){
        res.status(500).send(err.message);
    }
}

exports.getUsers = async (req,res)=>{
    const users = await User.find().populate('userType');
    res.status(200).json(users);
}

exports.login = async(req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        res.status(400).send('Email not found');
    }
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){ 
        res.status(400).send('password not correct')
    } 
  
    const token = jwt.sign(
        {userId : user._id,userType : user.userType},
        process.env.secret_key,
        {expiresIn : '1h'}
    )
    res.status(200).json(token);

}
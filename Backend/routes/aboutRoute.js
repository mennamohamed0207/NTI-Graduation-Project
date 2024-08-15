const express=require('express');
const {createAbout,getAbout,updateAbout}=require('../services/aboutService');

const router=express.Router();


router.post("/",createAbout);
router.get("/",getAbout);
router.put("/:degree",updateAbout);

module.exports=router;
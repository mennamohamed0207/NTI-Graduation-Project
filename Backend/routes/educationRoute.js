const express=require('express');
const {createEducation,getEducaiton,deleteEducation,updateEducation}=require('../services/educationService');
const router=express.Router();

router.post("/",createEducation);
router.get("/",getEducaiton);
router.delete("delete/:degree",deleteEducation);
router.put("/:degree",updateEducation);

module.exports=router
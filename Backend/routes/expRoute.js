const express=require('express');
const {createExperience,getExperience,deleteExperience,updateExperience}=require('../services/expService');

const router=express.Router();


router.post("/",createExperience);
router.get("/",getExperience);
router.delete("/:title",deleteExperience);
router.put("/:title",updateExperience);

module.exports=router;
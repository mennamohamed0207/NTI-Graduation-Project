const express=require('express');
const {createSkill,getSkills,updateSkill,deleteSkill}=require('../services/skillService');
const router=express.Router();

router.post("/add",createSkill);
router.get("/",getSkills);
router.delete("/:name",deleteSkill);
router.put("/:name",updateSkill);

module.exports=router;
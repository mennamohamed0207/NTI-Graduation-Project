const express=require('express');
const {createContact,getContacts,updateContact,deleteContact}=require('../services/contactService');
const router=express.Router();

router.post("/add",createContact);
router.get("/",getContacts);
router.delete("/:name",deleteContact);
router.put("/:name",updateContact);

module.exports=router;
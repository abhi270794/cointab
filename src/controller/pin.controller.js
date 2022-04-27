const Pin = require("../model/Pincode.models");

const express = require("express");

const router = express.Router();



router.post("", async(req,res) =>{
    try{
        const pin = await Pin.create(req.body);
        return res.status(201).json({pin});

    }
    catch(error){
        return res.status(500).json({error:error.message, status: "failed"});
    }
})


router.get("", async(req,res) =>{
    try{

        const pins = await Pin.find().lean().exec();
        return res.status(200).json({pins}); 

    }
    catch(error){
        return res.status(500).json({error:error.message, status: "failed"});
    }
})






module.exports = router;
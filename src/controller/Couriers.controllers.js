const Courier = require("../model/Couriers.models");

const express = require("express");

const router = express.Router();



router.post("", async(req,res) =>{
    try{
        const courier = await Courier.create(req.body);
        return res.status(201).json({courier});

    }
    catch(error){
        return res.status(500).json({error:error.message, status: "failed"});
    }
})


router.get("", async(req,res) =>{
    try{

        const couriers = await Courier.find()
        .populate({path:"pin_id", select:"pincode"})

        .lean()
        .exec();
        return res.status(200).json({couriers}); 

    }
    catch(error){
        return res.status(500).json({error:error.message, status: "failed"});
    }
})






module.exports = router;
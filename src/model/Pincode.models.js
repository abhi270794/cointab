const mongoose = require("mongoose")
const pinSchema = new mongoose.Schema( 
    {
        pincode:{type:Number , required:true}
       
        
    },
        {
        versionKey: false,
        timestamps: true,
        }
    );

module.exports = mongoose.model("pin",pinSchema);
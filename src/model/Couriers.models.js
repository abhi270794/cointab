const mongoose = require("mongoose")
const rateSchema = new mongoose.Schema( 
    {
      weight:{type:Number , required:true},
    //   pin:{type:Number , required:true},
      Delivery:{type:String , required:true},
      pin_id:{ 
        type:mongoose.Schema.Types.ObjectId,
        ref:"pin",
        required: true,
      
    },

        
    },
        {
        versionKey: false,
        timestamps: true,
        }
    );

module.exports = mongoose.model("rate",rateSchema);
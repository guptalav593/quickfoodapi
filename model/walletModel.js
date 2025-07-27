import mongoose  from "mongoose";

const walletSchema = new mongoose.Schema({

    userId:{
        type: String,
        requrired: true
    },

     amount:{
        type: mongoose.Schema.Types.Double,
        requrired: true
    },

      currency:{
        type: String,
        requrired: true
    },

     status:{
        type: String,
        requrired: true
    },
     method:{
        type: String,
        requrired: true
    }

    ,
     razorpayPaymentId:{
        type: String,
        requrired: true
    },
        razorpayOrderId:{
            type: String,
            requrired: true
        },
        createdAt:{
            type: String,
            default: Date.now
        }

});

export default mongoose.model("wallets", walletSchema);




import mongoose  from "mongoose";

const prodSchema = new mongoose.Schema({

    /*name:{
        type: String,
        requrired: true
    },

     email:{
        type: String,
        requrired: true
    },*/

      proimage:{
        type: String,
        requrired: true
    }


});

export default mongoose.model("products", prodSchema);




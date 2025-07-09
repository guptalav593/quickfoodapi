import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({

    name:{
        type: String,
        requrired: true
    },

     email:{
        type: String,
        requrired: true
    },

      password:{
        type: String,
        requrired: true
    }


});

export default mongoose.model("users", userSchema);




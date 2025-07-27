import mongoose  from "mongoose";

const optionSchema = new mongoose.Schema({

    fCoption:{
        type: String,
        requrired: true
     },
    
    
});

export default mongoose.model("Options", optionSchema);
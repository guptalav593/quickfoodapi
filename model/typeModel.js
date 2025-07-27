import mongoose  from "mongoose";

const ftypeSchema = new mongoose.Schema({

    fCtype:{
        type: String,
        requrired: true
     },
     optionId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Options" }]

    
});

export default mongoose.model("fctypes", ftypeSchema);
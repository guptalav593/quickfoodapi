import mongoose  from "mongoose";

const catSchema = new mongoose.Schema({

    catname:{
        type: String,
        requrired: true
    },
    catimage:{
        type: String,
        requrired: true
    }
});

export default mongoose.model("categories", catSchema);




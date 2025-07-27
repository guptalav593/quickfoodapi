import mongoose  from "mongoose";

const prodSchema = new mongoose.Schema({

     fname:{
        type: String,
        requrired: true
     },

      description:{
        type: String,
        requrired: true
     },

       ftypes: [
    {
      title: {
        type: String,
        required: true
      },
      options: [
        {
          name: {
            type: String,
            required: true
          },
        }
      ]
    }
  ],

   category:{
        type: String,
        requrired: true
     },

});

export default mongoose.model("foods", prodSchema);




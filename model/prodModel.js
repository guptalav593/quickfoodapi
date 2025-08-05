import mongoose  from "mongoose";

const prodSchema = new mongoose.Schema(
  {

     fname:{
        type: String,
        requrired: true
     },

     fimage:{
      type: String,
      required: true

     },

      description:{
        type: String,
        requrired: true
     },

       ftypes: [
    {

       canselect: {
        type: String,
        required: true
      },

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
          price:{
              type: mongoose.Schema.Types.Double,
              requrired: true
          }
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




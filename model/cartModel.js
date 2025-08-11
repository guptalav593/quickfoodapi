import mongoose  from "mongoose";

const cartSchema = new mongoose.Schema(
  {

 userid:{
        type: String,
        requrired: true
     },
    


  cartid:{
        type: String,
        requrired: true
     },


     fname:{
        type: String,
        requrired: true
     },


     totalamount:{
       type: mongoose.Schema.Types.Double,
      required: true

     },

    ftypes: [
    {
      name: {
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
              type: String,
              requrired: true
          }
        }
      ]
    }
  ],

   quantity:{
      type: Number,
      required: true

     },



});

export default mongoose.model("carts", cartSchema);




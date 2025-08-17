import Category from "../model/catModel.js";
import Prod from "../model/prodModel.js";
import ftype from "../model/typeModel.js";
import option from "../model/optionsModel.js";
import cloudinary from "../utils/cloudinary.js"; // Ensure this import is correct
import cart from "../model/cartModel.js";

export const create = async (req, res) => {
 
    try {

        const userData = new Category(req.body);
        const { catname } = userData;
        console.log({ catname });
        const catExist = await Category.findOne({ catname });

        if (catExist) {
            console.log("category already exists");
            res.status(200).json(catExist);

        }
        else {
            const result = await cloudinary.uploader.upload(req.file.path, {
            });
            userData['catimage'] = result.secure_url;
            const savedCat = await userData.save();
            console.log("category is saved", savedCat);
            res.status(200).json(savedCat);
        }

    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }

}

export const fetch = async (req, res) => {
    try {

        const cats = await Category.find();
        if (cats.length === 0) {
            return res.status(404).json({ mesasge: "no category found" });
        }
        res.status(200).json(cats);

    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }

};



export const fetchproduct = async (req, res) => {
    try {
        //const data = req.body.category;
        const products = await Prod.find();
        if (products.length === 0) {
            return res.status(404).json({ mesasge: "no product found" });
        }
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }

};

export const fetchprotype = async (req, res) => {
    try {
        const data = req.body.category;
        const products = await Prod.find({category:data});
        if (products.length === 0) {
            return res.status(404).json({ mesasge: "no product found" });
        }
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }

};


export const fetchcart = async (req, res) => {
    try {
        const cartData = new cart(req.body);
        const { userid } = cartData;
        const cartCount = await cart.find({ userid });

        if (cartCount.length === 0) {
            console.log("Cart is Empty");
            res.status(200).json(cartCount);

        }
       else {
           
            res.status(200).json(cartCount);
        }
           
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }

}

export const addcart = async (req, res) => {
    try
     {
            const cartData = new cart(req.body);
            const savedCart = await cartData.save();
            console.log("Cart is saved", savedCart);
            res.status(200).json(savedCart);
        
           
         }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }

}


export const updatecart = async (req, res) => {
try {
   const { userid, cartid, quantity } = req.body;

    if (!userid || !cartid || quantity == null) {
      return res.status(400).json({ error: "userid, cartid, and quantity are required" });
    }

    const result = await cart.updateOne(
      { userid: userid, cartid: cartid },        // filter from request
      { $set: { quantity: quantity } }           // update quantity
    );
   
    if (result.modifiedCount > 0) {
      res.json({ success: true, message: 'Quantity updated successfully' });
    } else {
      res.json({ success: false, message: 'No matching item found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }

}


export const modifycart = async (req, res) => {
    try {
       const { userid, cartid,totalamount, ftype } = req.body;
    
        if (!userid || !cartid || ftype == null) {
          return res.status(400).json({ error: "userid, cartid, and ftype are required" });
        }
    
        const result = await cart.updateOne(
          { userid: userid, cartid: cartid },        // filter from request
          { $set: { ftypes: ftype, totalamount: totalamount } }           // update quantity
        );
       
        if (result.modifiedCount > 0) {
          res.json({ success: true, message: 'cart updated successfully' });
        } else {
          res.json({ success: false, message: 'No matching item found' });
        }
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
      }
    
    }


export const addproduct = async (req, res) => {

    try {
        /*const prodData = new Prod(req.body.data);*/
        const jsonData = JSON.parse(req.body.data);
        const prodData = new Prod(jsonData);
        const { fname } = prodData;
        const ProdExist = await Prod.findOne({ fname });

        if (ProdExist) {
            console.log("Food already exists");
            res.status(200).json("exists");

        }
        else {
            const result = await cloudinary.uploader.upload(req.file.path, {
            });
            prodData['fimage'] = result.secure_url;
            const savedProd = await prodData.save();
            console.log("Food is saved", savedProd);
            res.status(200).json(savedProd);
        }
           
        /*  const jsonData = JSON.parse(req.body.data); // parse the JSON string
  const file = req.file;

  console.log('Received JSON data:', jsonData);
  console.log('Received file:', file);*/
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }

}


export const addftype = async (req, res) => {

    try {
        const ftypeData = new ftype(req.body);
        const { fCtype } = ftypeData;
        const ftypeExist = await ftype.findOne({ fCtype });

        if (ftypeExist) {
            console.log("Food already exists");
            res.status(200).json("exists");

        }
        else {
            const savedftype = await ftypeData.save();
            console.log("Ftype is saved", savedftype);
            res.status(200).json(savedftype);
        }

    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }

}



export const addoption = async (req, res) => {

    try {
        const optionData = new option(req.body);
        const { fCoption } = optionData;
        const optionExist = await ftype.findOne({ fCoption });

        if (optionExist) {
            console.log("Option already exists");
            res.status(200).json("exists");

        }
        else {
            const savedoption = await optionData.save();
            console.log("option is saved", savedoption);
            res.status(200).json(savedoption);
        }

    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }

}


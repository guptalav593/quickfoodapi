import Category from "../model/catModel.js";
import Prod from "../model/prodModel.js";
import ftype from "../model/typeModel.js";
import option from "../model/optionsModel.js";
import cloudinary from "../utils/cloudinary.js"; // Ensure this import is correct

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



export const addproduct = async (req, res) => {

    try {
        const prodData = new Prod(req.body);
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


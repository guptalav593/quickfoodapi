import Category from "../model/catModel.js";
import Prod from "../model/prodModel.js";


export const create = async  (req, res) => {

    try {

        const userData = new Category(req.body);
        const { catname } = userData;
        console.log({catname});
        const catExist = await Category.findOne({ catname });

        if (catExist) {
            console.log("category already exists");
            res.status(200).json("exists");

        }
        else {
            userData['catimage'] = req.file.filename;
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



export const addproduct = async (req, res) => {

    try {
        const userData = new Prod(req.body);
        const { proimage } = userData;
        const ProdExist = await Prod.findOne({ proimage });

        if (ProdExist) {
            console.log("Product already exists");
            res.status(200).json("exists");

        }
        else {



            const savedProd = await userData.save();
            console.log("Product is saved", savedProd);
            res.status(200).json(savedProd);
        }

    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }

}


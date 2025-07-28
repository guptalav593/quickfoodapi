import express from "express"
import multer from "multer";
//import cloudinary from "../utils/cloudinary.js";
import { fetch, create, addproduct,addftype, fetchproduct, fetchprotype,addoption } from "../controller/proController.js"

const proRoute = express.Router();

// Initialize Multer with the storage configuration
const upload = multer({dest: 'uploads/'});

proRoute.post("/createCategories", upload.single('file'),
    create
);



proRoute.get("/getCategories", fetch);
proRoute.get("/getproducts", fetchproduct);
proRoute.get("/fetchtypes", fetchprotype);
proRoute.post("/addProducts", upload.single('file'), addproduct);
proRoute.post("/addFtype", addftype);addoption
proRoute.post("/addOption", addoption);



export default proRoute;
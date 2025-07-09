import express from "express"
import multer from "multer";
import { fetch, create, addproduct } from "../controller/proController.js"

const proRoute = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Destination folder for uploaded files
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Rename the file to include the timestamp
    },
}); 

// Initialize Multer with the storage configuration
const upload = multer({ storage: storage });

proRoute.post("/createCategories", upload.single('file'), create);
proRoute.get("/getCategories", fetch);
proRoute.post("/addProducts", addproduct);


export default proRoute;
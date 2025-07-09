import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser";
import dotenv from "dotenv"
import cors from "cors"
import route from "./routes/userRoute.js";
import proRoute from "./routes/proRoute.js";

const app = express();
app.use(express.static('uploads'));
app.use('/uploads', express.static('uploads'));
app.use(cors());
app.use(bodyParser.json());
dotenv.config();
const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(()=>{
    console.log("db connected");
    app.listen(PORT, ()=>{
        console.log(`the port is listening on port ${PORT}`)

    })
}).catch((error) => console.log(error));

app.use("/api/user", route);
app.use("/api/product", proRoute);



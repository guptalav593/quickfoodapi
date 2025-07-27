import express from "express"
import { fetch, create, login,addtowallet,fetchwallet} from "../controller/userController.js"

const route = express.Router();

route.post("/create", create);
route.get("/getAllUsers", fetch);
route.post("/login", login);
route.post("/addtowallet", addtowallet);
route.post("/fetchwallet", fetchwallet);

export default route;
import express from "express"
import { fetch, create, login} from "../controller/userController.js"

const route = express.Router();

route.post("/create", create);
route.get("/getAllUsers", fetch);
route.post("/login", login);

export default route;
import express from "express";
import { getAllUser, login, signup } from "../controllers/user-controller";

const ROUTER = express.Router();

ROUTER.get("/", getAllUser);
ROUTER.post("/signup", signup);
ROUTER.post("/login", login);
export default ROUTER;
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import ROUTER from "./user-routes";
import blogRouter from "./blog-routes";

const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/user", ROUTER);
app.use("/api/blog", blogRouter);
mongoose
  .connect(
    "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1"
  ).then(()=> console.log('mogodb is connected'))
  .then(() => app.listen(5000))
  .then(() =>
    console.log("server is running")
  )
  .catch((err) => console.log(err));

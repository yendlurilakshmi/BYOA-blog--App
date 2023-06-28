import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
// import router from "./routes/user-routes";
// import router from "../../routes/user-routes";
import cors from "cors";
const ROUTER =require("./routes/user-routes");
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/user',ROUTER)

// app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose
  .connect(
    "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1"
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("server is running")
  )
  .catch((err) => console.log(err));
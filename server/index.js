import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
// import dbConfig from "./config/db.js";

import postRoutes from "./routes/posts.js";
import adminRoute from "./routes/admin.js";
import logoRoutes from "./routes/logos.js";

import {} from "dotenv/config";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
app.use("/admin", adminRoute);
app.use("/logos", logoRoutes);
const _pass = process.env._password;
const CONNECTION_URL = `mongodb+srv://portfoliodemo:${_pass}@cluster0.ba8gfim.mongodb.net/gsv?retryWrites=true`;
const PORT = process.env.PORT || 5000;

mongoose.connect(
  CONNECTION_URL,
  () => {
    console.log(`server is running on port: ${PORT}`);
  },
  (e) => console.error(e)
);

app.listen(PORT);

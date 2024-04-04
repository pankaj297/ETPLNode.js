import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import("./src/connection/connection.js");
dotenv.config();

import userRoutes from "./src/routes/userRoutes.js";
import UserModel from "./src/models/userModel.js";

const app = express();

const port = process.env.PORT || 7000;

app.use(cors());
app.use(express.json());

app.use("/api/v1/users", userRoutes);

app.get("/", (req, res) => {
  // res.send("Welcome to the ELANSOL Technologies");
  UserModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(port, () => {
  console.log(`server running at port ${port}`);
});

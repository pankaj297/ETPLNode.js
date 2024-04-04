import express from "express";
const router = express.Router();
import {
  createUser,
  getUser,
  loginUser,
} from "../controllers/userController.js";

router.get("/getUser", getUser);
router.post("/createUser", createUser);

router.post("/loginUser", loginUser);
export default router;

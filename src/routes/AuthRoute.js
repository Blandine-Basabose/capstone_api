import express from "express";
import UserController from "../controllers/UserController";
const router = express.Router();

router
.route("/")
.post(UserController.signUp)
.get(UserController.getUser);

router.post("/signin", UserController.signIn);

export default router;
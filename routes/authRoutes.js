import express from "express";
import { check, login, register } from "../controller/authController.js";
import { checkToken, encrypt } from "../middleWares/authMiddleware.js";

export const router = new express.Router();

router.post("/login", encrypt, login);
router.post("/register", encrypt, register);
router.get("/check", checkToken, check);

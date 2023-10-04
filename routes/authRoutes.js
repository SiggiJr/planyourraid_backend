import express from "express";
import { login, register } from "../controller/authController.js";
import { encrypt } from "../middleWares/authMiddleWare.js";

export const router = new express.Router();

router.post("/login", encrypt, login);
router.post("/register", encrypt, register);

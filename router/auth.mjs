import express from "express";
import * as authController from "../controller/auth.mjs";

const router = express.Router();

// 회원가입 post
// http://127.0.0.1:8080/auth/signup
router.post("/signup", authController.signup);

// 로그인 기능 post
// http://127.0.0.1:8080/auth/login
router.post("/login", authController.login);

// 로그인 me
router.get("/me", authController.me);

// 로그아웃
router.get("/logout", authController.logout);

export default router;

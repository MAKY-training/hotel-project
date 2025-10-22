import { Router } from "express";
import {
  login,
  signup,
  logout,
  checkAuth,
} from "../controllers/auth.controller.js";
import { validateSignup } from "../middelwares/signup.validate.js";
import { validateLogin } from "../middelwares/login.validate.js";
import { verifyToken } from "../middelwares/verifyToken.js";

const router = Router();

router.post("/login", validateLogin, login);
router.post("/signup", validateSignup, signup);
router.post("/logout", logout);
router.get("/check-auth", verifyToken, checkAuth);

export default router;

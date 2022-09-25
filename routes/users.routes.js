import express from "express";
import * as users from "../controllers/users.controller.js";

const router = express.Router();

router.post("/login", users.login);
router.post("/signup", users.signup);

export default router;

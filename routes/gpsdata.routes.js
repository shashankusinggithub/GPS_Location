import express from "express";
import * as gpsdata from "../controllers/gpsdata.controllers.js";
import auth from "../Middleware/authMiddleware.js";

const router = express.Router();

router.get("/", auth, gpsdata.allData);
router.get("/:id", auth, gpsdata.deviceData);

export default router;

import { Router } from "express";
import { createHotels, getHotels , getLastHotels } from "../controllers/hotel.controller.js";

const router = Router();

router.post("/create", createHotels);
router.get("/all", getHotels);
router.get("/latest", getLastHotels);

export default router;

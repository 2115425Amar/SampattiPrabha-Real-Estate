// D:\WEBDEV\MajorProject\api\routes\recommend.route.js
import express from "express";
import { getRecommendations } from "../controllers/recommend.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";
const router = express.Router();

router.get("/",verifyToken, getRecommendations);

export default router;
import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getMessages, getUserForSidebar, sendMessage } from "../controllers/message.controller.js";

const router = express.Router();


router.get("/users", protectRoute, getUserForSidebar);

router.get("/:userId", protectRoute, getMessages);

router.post("/send/:userId", protectRoute, sendMessage);


export default router;